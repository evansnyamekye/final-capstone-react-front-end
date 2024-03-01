import React, { useState } from 'react';
import axios from 'axios';
import '../AddPlace.css';

function AddPlace() {
  const [placeData, setPlaceData] = useState({
    description: '',
    photo: '',
    location: '',
    rate: '',
    address: '',
    user_id: localStorage.getItem('userId'),
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setPlaceData({ ...placeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const userId = localStorage.getItem('userId');
      await axios.post(`http://localhost:3000/api/v1/users/${userId}/places`, placeData);
      setStatus('succeeded');
    } catch (error) {
      setStatus('failed');
      setError(error.response.data);
      console.error('Failed to add place:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Place</h2>
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
      {' '}
      {/* Add address input */}
      {status === 'failed' && (
      <div className="error-message">
        Error:
        {' '}
        {error}
      </div>
      )}
      <button type="submit" onClick={handleSubmit} disabled={status === 'loading'}>Add Place</button>
    </div>
  );
}

export default AddPlace;
