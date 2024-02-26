import React, { useState } from 'react';
import axios from 'axios';

function UserSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      console.log(error);
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        {' '}
        <br />
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
export default UserSignUp;
