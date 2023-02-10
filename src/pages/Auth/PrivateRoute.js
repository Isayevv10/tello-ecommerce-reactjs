import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogged } from "../../redux/recuder/loginReducer";

const PrivateRoute = () => {
  const dispatch = useDispatch();

  let getLoggedIn = localStorage.getItem("logged");
  if (getLoggedIn) {
    dispatch(setIsLogged(true));
  } else {
    dispatch(setIsLogged(false));
  }

  return <div>{getLoggedIn ? <Outlet /> : <Navigate to='/login' />}</div>;
};

export default PrivateRoute;
