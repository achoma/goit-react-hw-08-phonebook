import { createSlice } from '@reduxjs/toolkit';

const loadTokenFromStorage = () => {
  try {
    const storedToken = localStorage.getItem('token');
    return storedToken ? JSON.parse(storedToken) : null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: loadTokenFromStorage(),
  reducers: {
    setToken: (state, action) => {
      const newToken = action.payload;
      localStorage.setItem('token', JSON.stringify(newToken));
      return newToken;
    },
    clearToken: () => {
      localStorage.removeItem('token');
      return null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
