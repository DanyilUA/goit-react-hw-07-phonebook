import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import storage from 'redux-persist/lib/storage';

const contactDetailsSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,
  reducers: {
    fetchContacts: (state) => {
      state.action;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};


export const contactsReducer = contactDetailsSlice.reducer;



export const { addContact, deleteContact, filterContacts, fetchContacts } =
  contactDetailsSlice.actions;

