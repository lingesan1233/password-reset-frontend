import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20, backgroundColor: '#eee', display: 'flex', gap: 10 }}>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Signup</button>
      <button onClick={() => navigate('/reset-password')}>Reset Password</button>
    </div>
  );
};

export default Navbar;
