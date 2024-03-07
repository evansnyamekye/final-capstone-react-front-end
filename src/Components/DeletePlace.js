import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../Redux/places/deleteItemSlice';
import { fetchPlaces } from '../Redux/places/placesSlice';
import '../DeleteItem.css';

const DeletePlace = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  const status = useSelector((state) => state.deleteItem.status);
  const error = useSelector((state) => state.deleteItem.error);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  const handleDelete = (id) => {
    setShowConfirmation(true);
    setItemIdToDelete(id);
  };

  const confirmDelete = () => {
    dispatch(deleteItem(itemIdToDelete))
      .then(() => {
        dispatch(fetchPlaces());
        setShowConfirmation(false);
      });
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setItemIdToDelete(null);
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
            <button className="delete" type="button" onClick={() => handleDelete(place.id)}>Delete</button>
            {showConfirmation && (
            <div className="confirmation-dialog">
              <p>Are you sure?</p>
              <button type="button" id="deleteyes" onClick={confirmDelete}>Yes</button>
              <button type="button" id="deleteno" onClick={cancelDelete}>No</button>
            </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeletePlace;
