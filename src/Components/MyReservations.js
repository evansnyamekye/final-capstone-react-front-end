import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, removeReservation } from '../Redux/reservations/myReservationsSlice';
import '../MyReservations.css';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.myReservations.reservations);
  const status = useSelector((state) => state.myReservations.status);
  const error = useSelector((state) => state.myReservations.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReservations());
    }
  }, [status, dispatch]);

  const handleDelete = (reservationId) => {
    dispatch(removeReservation(reservationId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="myreservationspage">
      <h1>My Reservations</h1>
      {reservations.length === 0 ? (
        <div>No reservations</div>
      ) : (
        reservations.map((reservation) => (
          <ul key={reservation.id} className="reservation-card-container">
            <div className="reservation-card-detail">
              <img className="place-img" src={reservation.place.photo} alt={reservation.place.description} />
              <li>
                <h2>{reservation.place.description}</h2>
                <p>
                  <strong>Check-in:</strong>
                  {' '}
                  {reservation.start_date}
                </p>
                <p>
                  <strong>Check-out:</strong>
                  {' '}
                  {reservation.end_date}
                </p>
                <p>
                  <strong>Price:$</strong>
                  {' '}
                  {reservation.price}
                </p>
                <button
                  type="button"
                  id="delete-button"
                  onClick={() => handleDelete(reservation.id)}
                >
                  Delete
                </button>
              </li>
            </div>
          </ul>
        ))
      )}
    </div>
  );
}

export default MyReservations;
