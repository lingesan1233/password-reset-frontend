import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/signup`, { email, password });
      alert('Signup successful');
    } catch (err) {
      alert(err.response.data.message || 'Signup failed');
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
