import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacsReducer';


export const store = configureStore({
  reducer: {
    contactDetails: contactsReducer,
  },
});
