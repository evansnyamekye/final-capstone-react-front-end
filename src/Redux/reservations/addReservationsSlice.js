import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData, { rejectWithValue }) => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post(`http://localhost:3000/api/v1/users/${userId}/reservations`, reservationData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const addReservationSlice = createSlice({
  name: 'addReservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations.push(action.payload);
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default addReservationSlice.reducer;
