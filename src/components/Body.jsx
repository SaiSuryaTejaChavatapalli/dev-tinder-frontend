import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../services/profile";
import { addUser } from "../utils/slices/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const resp = await getProfile();
      const loggedInUser = resp.data;
      if (loggedInUser) dispatch(addUser(loggedInUser));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
