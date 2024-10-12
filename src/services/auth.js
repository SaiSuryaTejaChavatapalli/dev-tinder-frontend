import axiosInstance from "../axiosInstance";

export const login = async (emailId, password) => {
  return axiosInstance.post("login", {
    emailId,
    password,
  });
};

export const logout = async () => {
  return axiosInstance.post("logout");
};

export const signup = async (data) => {
  return axiosInstance.post("signup", data);
};
