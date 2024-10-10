import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../services/profile";
import { addUser } from "../utils/slices/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const resp = await getProfile();
      const loggedInUser = resp.data.data;
      if (loggedInUser) {
        dispatch(addUser(loggedInUser));
      }
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
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
