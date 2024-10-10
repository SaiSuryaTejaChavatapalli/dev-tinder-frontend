import axiosInstance from "../axiosInstance";

export const getProfile = async () => {
  return axiosInstance.get("profile/view");
};
