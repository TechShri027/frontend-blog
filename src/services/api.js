import axios from "axios";

export const SERVER_URL = "https://backend-blog-1-tdc2.onrender.com";
export const API_URL = `${SERVER_URL}/api`;

const API = axios.create({
  baseURL: API_URL,
});

// token auto attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
