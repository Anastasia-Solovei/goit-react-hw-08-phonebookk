import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state, _) {
      state.user = {
        name: "",
        email: "",
        password: "",
      };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
