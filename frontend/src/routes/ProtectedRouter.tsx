import { useRecoilValueLoadable } from "recoil";
import { AuthAtom } from "../store/atoms/auth";
import { Navigate } from "react-router-dom";
import { RouteProps } from "../utils/types";

function ProtectedRoute(props: RouteProps) {
  const authorized = useRecoilValueLoadable(AuthAtom);

  return (
    <>
      {authorized.state === "loading" ? (
        <div>Loading...</div>
      ) : authorized.contents ? (
        props.element
      ) : (
        <Navigate to="/signin" />
      )}{" "}
    </>
  );
}

export default ProtectedRoute;
