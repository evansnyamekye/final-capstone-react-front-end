import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserAuth({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', { email, password });

    try {
      console.log('Submitting sign in form...');
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email,
          password,
        },
      });

      console.log('Response:', response.data);
      console.log('status:', response.status);

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        setLoggedIn(true);
        navigate('/layout');
      } else {
        console.error('Unexpected response status:', response.status);
        setErrorMessage('Invalid Email or password.');
      }
    } catch (error) {
      console.log('Error:', error.response.data);
      console.error('Axios error:', error);
      setErrorMessage('Invalid Email or password.');
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {' '}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button type="submit">Sign In</button>
        <br />
      </form>
      <p><Link to="/signup">Sign Up</Link></p>
    </>
  );
}

UserAuth.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default UserAuth;
