import { Navigate } from "react-router";
import { isLoggedIn } from "../api/auth";

export default function ProtectedRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to='/login' />;
}
