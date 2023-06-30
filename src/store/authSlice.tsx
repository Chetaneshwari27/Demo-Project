// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  password: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    registerUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser, registerUser } = authSlice.actions;
export default authSlice.reducer;