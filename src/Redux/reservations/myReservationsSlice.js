// reservationsSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReservations = createAsyncThunk(
  'myReservations/fetchReservations',
  async () => {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`http://localhost:3000/api/v1/users/${userId}/reservations`);
    return response.data;
  },
);

export const removeReservation = createAsyncThunk(
  'myReservations/removeReservation',
  async (reservationId) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.delete(`http://localhost:3000/api/v1/users/${userId}/reservations/${reservationId}`);
      return reservationId;
    } catch (error) {
      throw Error('Failed to delete reservation');
    }
  },
);

const myReservationsSlice = createSlice({
  name: 'myReservations',
  initialState: {
    reservations: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload,
        );
      })
      .addCase(removeReservation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default myReservationsSlice.reducer;
