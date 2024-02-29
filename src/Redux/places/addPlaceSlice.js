import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlaces = createAsyncThunk(
  'addplace/fetchPlaces',
  async () => {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(`http://localhost:3000/api/v1/users/${userId}/places`);
    return response.data;
  },
);

const initialState = {
  places: [],
  status: 'idle',
  error: null,
};

const addPlaceSlice = createSlice({
  name: 'addplace',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.status = 'success';
        state.places = action.payload;
      })
      .addCase(fetchPlaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default addPlaceSlice.reducer;
