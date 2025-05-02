import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${process.env.REACT_APP_API}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Reset link sent to your email!");
      } else {
        setMessage(`❌ ${data.message || "Failed to send reset link"}`);
      }
    } catch (err) {
      setMessage("❌ Error connecting to backend.");
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Reset Password</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default ResetPassword;
