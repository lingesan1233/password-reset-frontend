import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/reset-password`, { token });
        setMessage(res.data.message);
        setValid(true);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Invalid or expired token');
        setValid(false);
      }
    };

    verifyToken();
  }, [token]);

  return (
    <div>
      <h3>Reset Password</h3>
      <p>{message}</p>
      {valid && (
        <button className="btn btn-success mt-2" onClick={() => navigate(`/set-password/${token}`)}>
          Set New Password
        </button>
      )}
    </div>
  );
};

export default ResetPassword;
