import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-api.onrender.com", // update with your Render backend URL
});

// Signup API
export const signupUser = async (formData) => {
  const response = await API.post("/api/signup", formData);
  return response.data;
};

// Reset Password API
export const resetPassword = async (formData) => {
  const response = await API.post("/api/reset-password", formData);
  return response.data;
};
