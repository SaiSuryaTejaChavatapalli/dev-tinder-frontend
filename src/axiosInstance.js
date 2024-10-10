import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:7777/",
  withCredentials: true,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
