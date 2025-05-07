import { useState } from "react";
import { reset } from "../api";

export default function Reset() {
  const [form, setForm] = useState({ email: "", newPassword: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    await reset(form);
    alert("Password reset!");
  };

  return (
    <div>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="newPassword" type="password" onChange={handleChange} placeholder="New Password" />
      <button onClick={handleSubmit}>Reset Password</button>
    </div>
  );
}
