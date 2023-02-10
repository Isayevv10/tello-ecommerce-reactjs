import axios from "axios";
import React, { useState, useEffect } from "react";

const Favs = () => {
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      const url = new URL(
        `https://api.chec.io/v1/checkouts/${"cart_NqKE50vkKPwdgB"}`
      );

      const params = {
        type: "cart",
      };
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );

      const headers = {
        "X-Authorization":
          "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const paymentData = await axios.get(url, { headers });
      setCheckoutToken(paymentData.data);
    };

    generateToken();
  }, []);

  const fetchOrder = async () => {
    const url = new URL(
      `https://api.chec.io/v1/checkouts/${checkoutToken?.id}`
    );

    const headers = {
      "X-Authorization":
        "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const orders = await axios.post(url, { headers });

    console.log(orders);
  };

  // useEffect(() => {
  //   fetchOrder();
  // }, []);

  return <div>Favs</div>;
};

export default Favs;
