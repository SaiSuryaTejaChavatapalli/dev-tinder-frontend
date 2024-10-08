import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:7777/",
  timeout: 1000,
  withCredentials: true,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
