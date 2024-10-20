import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, setLoading } from "../utils/slices/userSlice";
import { refreshToken } from "../services/auth";
const Body = () => {
  const loading = useSelector((state) => state.user.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAndSetRefreshToken = async () => {
    try {
      const resp = await refreshToken();
      const loggedInUser = resp.data;

      if (loggedInUser) {
        dispatch(addUser(loggedInUser));
      }
    } catch (error) {
      if (error.response?.status === 401) {
        dispatch(removeUser()); // Log out the user if refresh token is not there
        navigate("/login");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
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
