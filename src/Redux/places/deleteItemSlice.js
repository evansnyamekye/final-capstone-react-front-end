import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteItem = (userId, placeId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/v1/users/${userId}/places/${placeId}`);
    dispatch({ type: 'deleteItem/deleteItem' });
  } catch (error) {
    dispatch({ type: 'deleteItem/deleteItemError', payload: error.response.data });
  }
};

const deleteItemSlice = createSlice({
  name: 'deleteItem',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('deleteItem/deleteItem', (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase('deleteItem/deleteItemError', (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default deleteItemSlice.reducer;
