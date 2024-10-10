import axiosInstance from "../axiosInstance";

export const getProfile = async () => {
  return axiosInstance.get("profile/view");
};

export const updateProfile = async (data) => {
  return axiosInstance.patch("profile/edit", data);
};
