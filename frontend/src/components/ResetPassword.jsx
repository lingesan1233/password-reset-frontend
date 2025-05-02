import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const handleReset = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/reset-password`, { email, newPassword });
      alert('Password reset successful');
    } catch (err) {
      alert(err.response.data.message || 'Reset failed');
    }
  };
  return (
    <div>
      <h2>Reset Password</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="New Password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} /><br />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
