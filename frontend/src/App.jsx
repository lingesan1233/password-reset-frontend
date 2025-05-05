import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Welcome from './pages/Welcome';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-center gap-4">
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Signup</button>
      <button onClick={() => navigate('/reset-password')}>Reset Password</button>
    </nav>
  );
};

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  </Router>
);

export default App;
