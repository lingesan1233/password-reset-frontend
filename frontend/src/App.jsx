import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import SetNewPassword from './components/SetNewPassword';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Welcome to the Password Reset App</h2>
              <p><a href="/forgot-password" className="btn btn-link">Forgot Password?</a></p>
            </div>
          } />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/set-password/:token" element={<SetNewPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
