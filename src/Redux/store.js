import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';
import addPlaceReducer from './places/addPlaceSlice';
import detailsPageReducer from './places/detailsPageSlice';
import deleteItemReducer from './places/deleteItemSlice';
import myReservationsReducer from './reservations/myReservationsSlice';
import addReservationReducer from './reservations/addReservationsSlice';

export default configureStore({
  reducer: {
    places: placesReducer,
    addPlace: addPlaceReducer,
    detailsPage: detailsPageReducer,
    deleteItem: deleteItemReducer,
    myReservations: myReservationsReducer,
    addReservation: addReservationReducer,
  },
});
