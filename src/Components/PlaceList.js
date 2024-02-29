// PlacesList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaces } from '../Redux/places/placesSlice';

function PlacesList() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  const status = useSelector((state) => state.places.status);
  const error = useSelector((state) => state.places.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlaces());
    }
  }, [status, dispatch]);

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
    <div>
      <h2>Places</h2>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <h3>{place.description}</h3>
            <img src={place.photo} alt={place.description} />
            <p>
              Location:
              {place.location}
            </p>
            <p>
              Rate:
              {place.rate}
            </p>
            <p>
              Address:
              {place.address}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlacesList;
