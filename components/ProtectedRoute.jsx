import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("memberToken");

  if (!token) {
    return <Navigate to="/member/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
