import axios from "axios";
import store from "./utils/store/appStore";
import { addUser, removeUser, setLoading } from "./utils/slices/userSlice";
import { BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "X-Custom-Header": "foobar" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState(); // Get the current state from the Redux store
    const token = state.user?.accessToken; // Assuming the token is stored in the auth slice
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const resp = await axios.post(
          `${BASE_URL}/refresh`,
          {},
          { withCredentials: true }
        );
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${resp.data.accessToken}`;

        store.dispatch(addUser(resp.data));
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        if (refreshError.response?.status === 401) {
          store.dispatch(removeUser());
        }
        return Promise.reject(refreshError);
      } finally {
        store.dispatch(setLoading(false));
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
