import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <button onClick={() => nav("/signup")}>Signup</button>
      <button onClick={() => nav("/login")}>Login</button>
      <button onClick={() => nav("/reset")}>Reset Password</button>
    </div>
  );
}
