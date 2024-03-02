import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';
import addPlaceReducer from './places/addPlaceSlice';
import reservationsReducer from './reservations/myReservationsSlice';

export default configureStore({
  reducer: {
    places: placesReducer,
    addPlace: addPlaceReducer,
    myReservations: reservationsReducer,
  },
});
