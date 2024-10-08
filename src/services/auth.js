import axiosInstance from "../axiosInstance";

export const login = async (emailId, password) => {
  const data = await axiosInstance.post("login", {
    emailId,
    password,
  });
  return data;
};
