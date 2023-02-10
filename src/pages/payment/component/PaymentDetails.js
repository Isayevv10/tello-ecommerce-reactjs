import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Controller, useForm } from "react-hook-form";
import "../style/paymentDetails.scss";
import { commerce } from "../../../commerce";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import PaymentPart from "./PaymentPart";

const PaymentDetails = ({ checkoutToken }) => {
  const stripePromise = loadStripe(
    "pk_test_51MYSdNCClSolcqPnIa791CrLTwpfhnwmC7S344BT3SC7jC4aJbTbhdnWknK9IcG1XSCSfszvHJU5WrmYeW6ws4tv00KLIngNDB"
  );

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");

  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const fetchCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchCountries(checkoutToken?.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchOptions(checkoutToken?.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const options = shippingOptions.map((sOption) => ({
    id: sOption.id,
    label: `${sOption.description} - (${sOption.price.formatted_with_symbol})`,
  }));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    email: "",
    name: "",
    surname: "",
    phone: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            1. Şəxsi məlumatlar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='payment-container'>
              <div className='payment-left'>
                <div>
                  <label>Ad</label> <br />
                  <input
                    type='text'
                    name='name'
                    className='inputInfo'
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is required",
                      },
                    })}
                  />
                  <br />
                  <small className='text-danger'>
                    {errors?.name && errors.name.message}
                  </small>
                </div>

                <div>
                  <label>Email</label> <br />
                  <input
                    type='email'
                    name='email'
                    className='inputInfo'
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is required",
                      },
                    })}
                  />
                  <br />
                  <small className='text-danger'>
                    {errors?.email && errors.email.message}
                  </small>
                </div>
              </div>

              <div className='payment-right'>
                <div>
                  <label>Soyad</label> <br />
                  <input
                    type='text'
                    name='surname'
                    className='inputInfo'
                    {...register("surname", {
                      required: {
                        value: true,
                        message: "surname is required",
                      },
                    })}
                  />
                  <br />
                  <small className='text-danger'>
                    {errors?.surname && errors.surname.message}
                  </small>
                </div>

                <div>
                  <label>Mobil nömrə</label> <br />
                  <input
                    type='number'
                    name='phone'
                    className='inputInfo'
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "phone is required",
                      },
                    })}
                  />
                  <br />
                  <small className='text-danger'>
                    {errors?.phone && errors.phone.message}
                  </small>
                </div>
              </div>
            </div>
            <div className='payment-btn'>
              <button type='submit'>Yadda saxla</button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>

      <FormControl>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              2. Çatdırılma
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Controller
              control={control}
              render={({ field }) => {
                <Select
                  value={shippingCountry}
                  fullWidth
                  onChange={(e) => setShippingCountry(e.target.value)}
                >
                  {countries?.map((country) => {
                    return (
                      <MenuItem key={country?.id} value={country?.id}>
                        {country?.label}
                      </MenuItem>
                    );
                  })}
                </Select>;
              }}
            ></Controller>

            <Controller
              control={control}
              render={({ field }) => {
                <Select
                  value={shippingSubdivision}
                  fullWidth
                  onChange={(e) => setShippingSubdivision(e.target.value)}
                >
                  {subdivisions?.map((subdivision) => {
                    return (
                      <MenuItem key={subdivision?.id} value={subdivision?.id}>
                        {subdivision?.label}
                      </MenuItem>
                    );
                  })}
                </Select>;
              }}
            ></Controller>

            <Controller
              control={control}
              render={({ field }) => {
                <Select
                  value={shippingOption}
                  fullWidth
                  onChange={(e) => setShippingOption(e.target.value)}
                >
                  {options?.map((option) => {
                    return (
                      <MenuItem key={option?.id} value={option?.id}>
                        {option?.label}
                      </MenuItem>
                    );
                  })}
                </Select>;
              }}
            ></Controller>
          </AccordionDetails>
        </Accordion>
      </FormControl>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            3. Ödəmə üsulu
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Elements stripe={stripePromise}>
            <PaymentPart />
          </Elements>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentDetails;
