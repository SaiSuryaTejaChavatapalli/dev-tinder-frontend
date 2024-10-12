import axiosInstance from "../axiosInstance";

export const postReviewRequest = async (status, requestId) => {
  return axiosInstance.post(`/request/review/${status}/${requestId}`);
};

export const postSendRequest = async (status, userId) => {
  return axiosInstance.post(`/request/send/${status}/${userId}`);
};
