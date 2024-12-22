import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
