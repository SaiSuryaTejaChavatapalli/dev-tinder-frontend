import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../services/profile";
import { addUser, setLoading } from "../utils/slices/userSlice";
const Body = () => {
  const loading = useSelector((state) => state.user.loading);
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
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchUser();
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
