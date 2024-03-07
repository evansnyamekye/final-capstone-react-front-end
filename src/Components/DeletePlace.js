import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../Redux/places/deleteItemSlice';
import { fetchPlaces } from '../Redux/places/placesSlice';
import '../DeleteItem.css';

const DeletePlace = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  const status = useSelector((state) => state.deleteItem.status);
  const error = useSelector((state) => state.deleteItem.error);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id))
      .then(() => {
        // Fetch places again after successful deletion
        dispatch(fetchPlaces());
      });
  };

  if (places.length === 0) {
    return <div>No places to delete</div>;
  }

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
    <div className="delete-place-container">
      <h1>Delete Place</h1>
      <ul className="delete-place-card">
        {places.map((place) => (
          <li key={place.id} className="card">
            <h3>{place.description}</h3>
            <img className="place-img" src={place.photo} alt={place.description} />
            <button className="delete" type="submit" onClick={() => handleDelete(place.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeletePlace;
