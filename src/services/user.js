import axiosInstance from "../axiosInstance";

export const getFeed = async () => {
  return axiosInstance.get("/feed");
};

export const getConnections = async () => {
  return axiosInstance.get("user/connections");
};

export const getConnectionRequests = async () => {
  return axiosInstance.get("user/requests/received");
};
