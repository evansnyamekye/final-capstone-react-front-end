import React, { useState } from 'react';
import axios from 'axios';

function UserSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form data:', { name, email, password });
    try {
      console.log('Submitting form...');
      const response = await axios.post('http://localhost:3000/users', {
        user: {
          name,
          email,
          password,
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.log('Error:', error.response.data);
      console.error('Axios error:', error);
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        {' '}
        <br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {' '}
        <br />
        {' '}
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        {' '}
        <br />
        <button type="submit">Sign Up</button>
        {' '}
        <br />
      </form>
    </>
  );
}
export default UserSignUp;
