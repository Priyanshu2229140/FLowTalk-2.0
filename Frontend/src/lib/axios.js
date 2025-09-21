// https://flow-talk20backend.vercel.app/api

import axios from "axios";

// const BASE_URL =
//   import.meta.env.MODE == "development"
//     ? "http://localhost:5001/api"
//     : "https://flow-talk20backend.vercel.app/api";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
