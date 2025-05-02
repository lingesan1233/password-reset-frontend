import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${process.env.REACT_APP_API}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Signup successful! You can now login.");
      } else {
        setMessage(`❌ ${data.message || "Signup failed"}`);
      }
    } catch (err) {
      setMessage("❌ Error connecting to backend.");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
