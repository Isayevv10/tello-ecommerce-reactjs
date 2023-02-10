import React, { useEffect, useState } from "react";
import { commerce } from "../../commerce";
import "./payment.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PaymentDetails from "./component/PaymentDetails";
import { useSelect } from "@mui/base";

const Payment = () => {
  const { cart1 } = useSelector((state) => state);

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

      console.log(paymentData.data);
    };

    generateToken();
  }, []);

  return (
    <div>
      <div className='payment-container'>
        <div className='flex-1'>
          {checkoutToken && <PaymentDetails checkoutToken={checkoutToken} />}
        </div>
        <div className='flex-2'>dunya</div>
      </div>
    </div>
  );
};

export default Payment;
