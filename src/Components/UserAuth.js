import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Sign-In.css';

const UserAuth = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email,
          password,
        },
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userId', response.data.status.data.id);

        setLoggedIn(true);
        navigate('/layout/placelist');
      } else {
        setErrorMessage('Invalid Email or password.');
      }
    } catch (error) {
      setErrorMessage('Invalid Email or password.');
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {' '}
      <form onSubmit={handleSubmit}>
        <input className="mail-border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <input className="mail-border" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button type="submit">Sign In</button>
        <br />
        <p><Link to="/signup" className="sign-up">Sign Up</Link></p>
      </form>
    </>
  );
};

UserAuth.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default UserAuth;
