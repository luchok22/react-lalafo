import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuth)

  if(!isAuth) {
    return <Navigate to="/signUp" replace />
  }

  return children
}

export default PrivateRoute;