import { useState } from "react";
import { signupUser } from "../api/authApi";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(form);
      alert(res.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" required onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" required onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Signup</button>
    </form>
  );
}
