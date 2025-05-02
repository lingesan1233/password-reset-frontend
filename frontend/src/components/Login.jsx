import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password });
      alert('Login successful');
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
