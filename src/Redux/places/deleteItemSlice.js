import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteItem = createAsyncThunk(
  'deleteItem/deleteItem',
  async (placeId) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.delete(`http://localhost:3000/api/v1/users/${userId}/places/${placeId}`);
      return placeId;
    } catch (error) {
      throw Error('Failed to delete place');
    }
  },
);
const deleteItemSlice = createSlice({
  name: 'deleteItem',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deleteItem = action.payload;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default deleteItemSlice.reducer;
