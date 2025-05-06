import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Signup</button>
      <button onClick={() => navigate('/reset-password')}>Reset Password</button>
    </nav>
  );
}
