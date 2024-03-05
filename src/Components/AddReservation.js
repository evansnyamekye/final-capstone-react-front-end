import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../Redux/reservations/addReservationsSlice';
import '../AddReservation.css';

function AddReservation() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');

  const initialReservationData = {
    start_date: '',
    end_date: '',
    price: '',
    place_id: '',
    user_id: userId,
  };

  const [reservationData, setReservationData] = useState(initialReservationData);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const status = useSelector((state) => state.addReservation.status);
  const error = useSelector((state) => state.addReservation.error);

  const fetchPlaces = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/${userId}/places`);
      const data = await response.json();
      setPlaces(data);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchPlaces(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (reservationData.start_date && reservationData.end_date && selectedPlace) {
      const startDate = new Date(reservationData.start_date);
      const endDate = new Date(reservationData.end_date);
      const daysDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      setNumberOfDays(daysDifference);
      setReservationData((prevState) => ({
        ...prevState,
        price: daysDifference * selectedPlace.pricepernight,
      }));
    }
  }, [reservationData.start_date, reservationData.end_date, selectedPlace, reservationData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });

    // Find the selected place and update the selectedPlace state
    if (name === 'place_id') {
      const selected = places.find((place) => place.id === parseInt(value, 10));
      setSelectedPlace(selected);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservationData)).then(() => {
      setReservationData(initialReservationData);
    });
  };

  return (
    <div
      className="form-container"
      style={{
        backgroundImage: `url(${selectedPlace && selectedPlace.photo})`, backgroundColor: 'rgb(151 191 17)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'overlay',
      }}
    >
      <h2>Add Reservation</h2>
      <input type="date" name="start_date" placeholder="Start Date" value={reservationData.start_date} onChange={handleChange} />
      <br />
      <input type="date" name="end_date" placeholder="End Date" value={reservationData.end_date} onChange={handleChange} />
      <br />
      <input type="number" name="price_per_night" placeholder="Price Per Night" value={selectedPlace ? selectedPlace.pricepernight : ''} disabled />
      <br />
      <input type="number" name="price" placeholder="Total Bill" value={reservationData.price || ''} disabled />
      <br />
      <select name="place_id" value={reservationData.place_id} onChange={handleChange}>
        <option value="">Select a place</option>
        {places.map((place) => (
          <option key={place.id} value={place.id}>{place.description}</option>
        ))}
      </select>
      <br />
      <div>
        {numberOfDays > 0 && (
          <p>
            Number of days:
            {numberOfDays}
          </p>
        )}
      </div>
      {status === 'failed' && (
        <div className="error-message">
          Error:
          {' '}
          {error}
        </div>
      )}
      {status === 'succeeded' && (
        <div className="success-message">Reservation added successfully!</div>
      )}
      <button className="button" type="submit" onClick={handleSubmit} disabled={status === 'loading'}>Add Reservation</button>
    </div>
  );
}

export default AddReservation;
