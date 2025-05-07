import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      nav("/welcome");
    } catch {
      alert("Invalid login");
    }
  };

  return (
    <div>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
