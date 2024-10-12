import axiosInstance from "../axiosInstance";

export const postReviewRequest = async (status, requestId) => {
  return axiosInstance.post(`/request/review/${status}/${requestId}`);
};
