import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchContactsAction,
  addContactAction,
  deleteContactAction,
} from './contacts-actions'
import axios from 'axios'
console.dir(axios)
// axios.defaults.baseURL = "http://localhost:4040";

export const fetchContacts = createAsyncThunk(
  fetchContactsAction,
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts')
      console.log(contacts)
      return contacts.data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const addContact = createAsyncThunk(addContactAction, async (item) => {
  const contact = await axios.post('/contacts', item)
  return contact.data
})

export const deleteContact = createAsyncThunk(
  deleteContactAction,
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`)
    return contactId
  },
)
