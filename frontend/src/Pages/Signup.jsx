import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    await axios.post(`${process.env.REACT_APP_API}/auth/signup`, { email, password });
    alert("Signup successful");
  };
  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} /><br/>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
