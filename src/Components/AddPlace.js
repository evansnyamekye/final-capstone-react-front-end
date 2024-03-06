import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace } from '../Redux/places/addPlaceSlice';
import '../AddPlace.css';

const AddPlace = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.addPlace.status);
  const error = useSelector((state) => state.addPlace.error);

  const initialPlaceData = {
    description: '',
    photo: '',
    location: '',
    rate: '',
    address: '',
    pricepernight: '',
    user_id: localStorage.getItem('userId'),
  };
  const [placeData, setPlaceData] = useState(initialPlaceData);

  const handleChange = (e) => {
    setPlaceData({ ...placeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlace(placeData));
  };

  return (
    <div className="form-container">
      <h2>Add Place</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Description" value={placeData.description} onChange={handleChange} />
        <br />
        <input type="text" name="photo" placeholder="Photo URL" value={placeData.photo} onChange={handleChange} />
        <br />
        <input type="text" name="location" placeholder="Location" value={placeData.location} onChange={handleChange} />
        <br />
        <input type="number" name="rate" placeholder="Rate" value={placeData.rate} onChange={handleChange} />
        <br />
        <input type="text" name="address" placeholder="Address" value={placeData.address} onChange={handleChange} />
        <br />
        <input type="number" name="pricepernight" placeholder="Price per night" value={placeData.pricepernight} onChange={handleChange} />
        <br />
        {status === 'failed' && error && (
          <div className="error-message">
            {error}
          </div>
        )}
        {status === 'succeeded' && (
          <div className="success-message">
            Place added successfully!
          </div>
        )}
        <button className="button" type="submit" disabled={status === 'loading'}><p>Add Place</p></button>
      </form>
    </div>
  );
};

export default AddPlace;
