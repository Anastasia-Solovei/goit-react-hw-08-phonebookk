import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  usersSignUpAction,
  usersLoginAction,
  usersLogoutAction,
  usersfetchCurrentUserAction,
} from "./auth-actions";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";
console.log(axios.defaults);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  usersSignUpAction,
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  usersLoginAction,
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  usersLogoutAction,
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  usersfetchCurrentUserAction,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("there is no token");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      console.log(data);
      return data;
    } catch (error) {}

    // await axios.post("/users/logout");
  }
);

export default { register, login, logout, fetchCurrentUser };
