import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = useSelector((store) => store.user);
  console.log("protected", loggedInUser);

  return !loggedInUser ? <Navigate to="/login" /> : children;
};

export default ProtectedRoute;
