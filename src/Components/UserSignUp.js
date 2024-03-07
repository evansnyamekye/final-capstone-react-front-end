import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Sign-Up.css';

const UserSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/users', {
        user: {
          name,
          email,
          password,
        },
      });
      navigate('/');
    } catch (error) {
      setErrorMessage('Invalid Email or password.');
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {' '}
      <form onSubmit={handleSubmit}>
        <input className="mail-border" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        {' '}
        <br />
        <input className="mail-border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {' '}
        <br />
        {' '}
        <br />
        <input className="mail-border" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        {' '}
        <br />
        <button type="submit">Sign Up</button>
        {' '}
        <br />
        <p><Link to="/" className="sign-up">Sign In</Link></p>
      </form>
    </>
  );
};

export default UserSignUp;
