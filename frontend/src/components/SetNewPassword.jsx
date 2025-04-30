import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SetNewPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/set-password`, {
        token,
        newPassword: password,
      });
      setMessage(res.data.message);
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h3>Set New Password</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>New Password</label>
          <input type="password" className="form-control" required
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary">Update Password</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default SetNewPassword;
