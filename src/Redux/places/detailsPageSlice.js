import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetailsPage = createAsyncThunk(
  'detailsPage/fetchDetailsPage',
  async (placeId, thunkAPI) => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:3000/api/v1/users/${userId}/places/${placeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const detailsPageSlice = createSlice({
  name: 'detailsPage',
  initialState: {
    detailsPage: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsPage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDetailsPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.detailsPage = action.payload;
      })
      .addCase(fetchDetailsPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default detailsPageSlice.reducer;
