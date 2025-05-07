import { useState } from "react";
import { resetPassword } from "../api/authApi";

function ResetPassword() {
  const [form, setForm] = useState({ email: "", newPassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword(form);
      alert(res.message);
    } catch (err) {
      alert(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" required onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="New Password" required onChange={e => setForm({...form, newPassword: e.target.value})} />
      <button type="submit">Reset Password</button>
    </form>
  );
}
