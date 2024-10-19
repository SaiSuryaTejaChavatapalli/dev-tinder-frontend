import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return !isAuthenticated ? <Navigate to="/login" /> : children;
};

export default ProtectedRoute;

ProtectedRoute.propTypees = {
  children: PropTypes.element,
};
