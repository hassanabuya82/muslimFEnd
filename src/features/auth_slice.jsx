import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem('muslimBlog_auth', action.payload.key);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem('muslimBlog_auth');
    },

  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
