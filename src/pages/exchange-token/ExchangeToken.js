import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLogged } from "../../redux/recuder/loginReducer";
import { commerce } from "../../commerce";

function ExchangeToken() {
  const { token } = useParams();
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const loginToProfil = async () => {
    const url = new URL("https://api.chec.io/v1/customers/exchange-token");

    const headers = {
      "X-Authorization":
        "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = {
      token,
    };

    await axios.post(url, body, { headers }).then((res) => {
      localStorage.setItem("commercejs_customer_id", res.data.customer_id);
      localStorage.setItem("commercejs_customer_token", res.data.jwt);
    });

    const res = await commerce.customer.isLoggedIn();

    dispatch(setIsLogged(res));
    localStorage.setItem("logged", res);
  };
  useEffect(() => {
    loginToProfil();
    navigate("/profil");
  }, []);
  return <div>Loading...</div>;
}

export default ExchangeToken;
