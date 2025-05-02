import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${process.env.REACT_APP_API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Login successful!");
      } else {
        setMessage(`❌ ${data.message || "Login failed"}`);
      }
    } catch (err) {
      setMessage("❌ Error connecting to backend.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
