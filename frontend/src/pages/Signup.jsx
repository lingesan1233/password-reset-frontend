import { useState } from "react";
import { signup } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    await signup(form);
    alert("Signed up!");
  };

  return (
    <div>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}
