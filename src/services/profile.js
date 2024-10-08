import axiosInstance from "../axiosInstance";

export const getProfile = async () => {
  try {
    const data = await axiosInstance.get("profile/view");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
