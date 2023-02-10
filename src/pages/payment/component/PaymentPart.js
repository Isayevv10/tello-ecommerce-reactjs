import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentPart = () => {
  const stripe = useStripe();
  const elements = useElements();

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit} style={{ width: "75%" }}>
        <CardElement />
        <button type='submit' disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentPart;
