import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPlace = createAsyncThunk(
  'addPlace/addPlace',
  async (placeData, thunkAPI) => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post(`http://localhost:3000/api/v1/users/${userId}/places`, placeData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const addPlaceSlice = createSlice({
  name: 'addPlace',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPlace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPlace.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(addPlace.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default addPlaceSlice.reducer;
