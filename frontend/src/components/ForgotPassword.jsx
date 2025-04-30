import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/forgot-password`, { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" required
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-primary">Send Reset Link</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default ForgotPassword;
