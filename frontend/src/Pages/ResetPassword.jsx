import { useState } from "react";
import axios from "axios";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleReset = async () => {
    await axios.post(`${process.env.REACT_APP_API}/auth/reset-password`, { email, newPassword });
    alert("Password reset successful");
  };
  return (
    <div>
      <h2>Reset Password</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/>
      <input placeholder="New Password" type="password" onChange={e => setNewPassword(e.target.value)} /><br/>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
