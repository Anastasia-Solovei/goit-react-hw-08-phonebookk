import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  usersSignUpAction,
  usersLoginAction,
  usersLogoutAction,
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

const register = createAsyncThunk(usersSignUpAction, async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const login = createAsyncThunk(usersLoginAction, async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logout = createAsyncThunk(usersLogoutAction, async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export default { register, login, logout };
