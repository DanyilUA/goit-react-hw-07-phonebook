import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactDetailsSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,
  reducers: {
    
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



export const contactsReducer = contactDetailsSlice.reducer;
export const { addContact, deleteContact, filterContacts } =
  contactDetailsSlice.actions;

