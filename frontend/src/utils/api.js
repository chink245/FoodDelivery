//centeralized API setup

import axios from "axios";
import qs from "qs";
// console.log("ENV:", import.meta.env.VITE_API_URL);
const api = axios.create({
  baseURL: "https://fooddelivery-m82b.onrender.com/api",
  withCredentials: true,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

export default api;
