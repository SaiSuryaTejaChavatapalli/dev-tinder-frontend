import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = useSelector((store) => store.user);
  return children;

  return !loggedInUser?.userData ? <Navigate to="/login" /> : children;
};

export default ProtectedRoute;
