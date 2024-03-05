import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';
import addPlaceReducer from './places/addPlaceSlice';
import deleteItemReducer from './places/deleteItemSlice';
import myReservationsReducer from './reservations/myReservationsSlice';
import addReservationReducer from './reservations/addReservationsSlice';

export default configureStore({
  reducer: {
    places: placesReducer,
    addPlace: addPlaceReducer,
    deleteItem: deleteItemReducer,
    myReservations: myReservationsReducer,
    addReservation: addReservationReducer,
  },
});
