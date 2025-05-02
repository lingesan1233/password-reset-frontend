import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <span className="navbar-brand">AuthApp</span>
      <div className="ml-auto">
        <button className="btn btn-outline-primary mx-1" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn btn-outline-success mx-1" onClick={() => navigate("/signup")}>
          Signup
        </button>
        <button className="btn btn-outline-danger mx-1" onClick={() => navigate("/reset-password")}>
          Reset Password
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
