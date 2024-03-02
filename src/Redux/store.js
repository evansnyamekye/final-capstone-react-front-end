import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';
import addPlaceReducer from './places/addPlaceSlice';
import deleteItemReducer from './places/deleteItemSlice';

export default configureStore({
  reducer: {
    places: placesReducer,
    addPlace: addPlaceReducer,
    deleteItem: deleteItemReducer,

  },
});
