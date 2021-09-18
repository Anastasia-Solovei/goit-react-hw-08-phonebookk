import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
console.log(axios.defaults)

const register = createAsyncThunk('auth/register', async (credentials) => {
  try {
    const { data } = await axios.post('/users/signup', credentials)
    console.log(data)
    return data
    //token.set(data.token);
  } catch (error) {
    console.log(error)
  }
})

export default { register }

// const login = createAsyncThunk("auth/login", async (credentials) => {
//   try {
//     const { data } = await axios.post("/users/login", credentials);
//     //token.set(data.token);
//   } catch {}
// });
