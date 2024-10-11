import axiosInstance from "../axiosInstance";

export const getFeed = async () => {
  return axiosInstance.get("/feed");
};
