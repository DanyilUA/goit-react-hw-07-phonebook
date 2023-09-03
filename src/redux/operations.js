import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://64f34480edfa0459f6c672e7.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        const response = await axios.get("/contacts");
        console.log('Response data:', response.data);
        return response.data;
    } catch (error) {
          console.error('Error fetching contacts:', error);

        return thunkApi.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (text, thunkApi) => {
    try {
        const response = await axios.post('/contacts', {text})
        return response.data;
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`) 
        return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    } 
});