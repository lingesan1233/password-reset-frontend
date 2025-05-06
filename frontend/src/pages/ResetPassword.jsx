import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [formData, setFormData] = useState({ email: '', newPassword: '' });
  const backendURL = 'https://your-backend-url.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendURL}/api/reset-password`, formData);
      alert('Password reset successful');
    } catch (err) {
      console.error(err);
      alert('Password reset failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
