import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLogged } from "../../redux/recuder/loginReducer";

const PublicRoute = () => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    let getLoggedIn = localStorage.getItem("logged");
    if (getLoggedIn) {
      dispatch(setIsLogged(true));
    } else {
      dispatch(setIsLogged(false));
    }
  }, [logged]);

  return <div>{logged ? navigate("/profil") : <Outlet />}</div>;
};

export default PublicRoute;
