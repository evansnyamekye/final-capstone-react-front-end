import React, { useState } from 'react';
import axios from 'axios';

function UserSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('localhost:3000/users/sign_in', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {' '}
        <br />
        {' '}
        <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
export default UserSignIn;
