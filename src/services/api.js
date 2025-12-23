import axios from "axios";

export const BASE_URL = "https://backend-blog-1-tdc2.onrender.com/api"; // ✅ export here

const API = axios.create({
  baseURL: BASE_URL,
});

// token auto attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
