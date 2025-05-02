import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export const signup = (data) => API.post('/signup', data)
export const login = (data) => API.post('/login', data)
export const resetPassword = (data) => API.post('/reset-password', data)
