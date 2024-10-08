import axiosInstance from "../axiosInstance";

export const login = async (emailId, password) => {
  try {
    const data = await axiosInstance.post("login", {
      emailId,
      password,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await axiosInstance.post("logout");
  } catch (error) {
    console.log(error);
  }
};
