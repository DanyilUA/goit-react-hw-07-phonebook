import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
// import { contactsReducer } from './contacsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
};


export const contactsReducer = contactDetailsSlice.reducer;

export const persistedContactReducer = persistReducer(persistConfig, contactsReducer);


export const { addContact, deleteContact, filterContacts } =
  contactDetailsSlice.actions;

