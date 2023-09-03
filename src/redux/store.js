import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacsReducer';
import { filterReducer } from './filterSlice';


export const store = configureStore({
  reducer: {
    contactDetails: contactsReducer,
    filterDetails: filterReducer,
  },
});
