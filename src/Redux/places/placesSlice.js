import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlaces = createAsyncThunk(
  'places/fetchPlaces',
  async () => {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`http://localhost:3000/api/v1/users/${userId}/places`);
    return response.data;
  },
);

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    places: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.places = action.payload;
      })
      .addCase(fetchPlaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default placesSlice.reducer;
