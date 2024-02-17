import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { selectAuthIsSignedIn } from "../../redux/authSelectors";

const RestrictedRoute = ({ children, redirectTo = "/catalog" }) => {
  const authenticated = useSelector();

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
