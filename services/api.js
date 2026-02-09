import axios from "axios";

/* =======================
   AXIOS INSTANCE
======================= */
// const API_BASE = "http://localhost:8000";
const API_BASE = "https://server.aitif.in";
// change to production URL when needed

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

/* =======================
   RESPONSE INTERCEPTOR
======================= */
api.interceptors.response.use(
  (response) => response.data, // always return data directly
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    console.error("API Error:", message);
    return Promise.reject(message);
  },
);

export default api;
