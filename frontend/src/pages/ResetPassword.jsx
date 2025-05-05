import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleReset = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', { email, newPassword });
      alert('Password reset successful');
    } catch {
      alert('Failed to reset password');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="New Password" onChange={e => setNewPassword(e.target.value)} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ResetPassword;
