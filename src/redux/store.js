import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebookSlice';
import tokenReducer from './tokenSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    token: tokenReducer,
  },
});
