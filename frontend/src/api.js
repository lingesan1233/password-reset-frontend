import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const signup = (data) => axios.post(`${API}/signup`, data);
export const login = (data) => axios.post(`${API}/login`, data);
export const reset = (data) => axios.post(`${API}/reset`, data);
