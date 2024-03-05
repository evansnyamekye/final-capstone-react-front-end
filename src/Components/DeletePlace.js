import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../Redux/places/deleteItemSlice';
import '../DeleteItem.css';

const DeletePlace = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  const status = useSelector((state) => state.deleteItem.status);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
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
        {status.error}
      </div>
    );
  }

  return (
    <div className="center">
      <h1>Delete Place</h1>
      <ul>
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
