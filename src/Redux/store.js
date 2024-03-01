// store.js
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';

export default configureStore({
  reducer: {
    places: placesReducer,
  },
});
