import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-blog-1-tdc2.onrender.com/api", // include /api
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
