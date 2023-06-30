import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});

export default store;
