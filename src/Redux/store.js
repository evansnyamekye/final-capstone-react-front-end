import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';
import addPlaceReducer from './places/addPlaceSlice';
import detailsPageReducer from './places/detailsPageSlice';

export default configureStore({
  reducer: {
    places: placesReducer,
    addPlace: addPlaceReducer,
    detailsPage: detailsPageReducer,
  },
});
