// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
// import recipeReducer from './dishSlice';
import dishReducer from './dishSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dish: dishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;