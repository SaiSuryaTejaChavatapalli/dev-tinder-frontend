import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../services/profile";
import { addUser, setLoading } from "../utils/slices/userSlice";
import { refreshToken } from "../services/auth";
const Body = () => {
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  // const fetchUser = async () => {
  //   try {
  //     const resp = await getProfile();
  //     const loggedInUser = resp.data.data;
  //     if (loggedInUser) {
  //       dispatch(addUser(loggedInUser));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

  const getAndSetRefreshToken = async () => {
    try {
      const resp = await refreshToken();
      const loggedInUser = resp.data;
      console.log("LoggedinUSer", loggedInUser);
      if (loggedInUser) {
        dispatch(addUser(loggedInUser));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    // fetchUser();
    getAndSetRefreshToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
