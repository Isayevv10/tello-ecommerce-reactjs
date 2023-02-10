import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../style/info.scss";
import edit from "../../../assets/svg/edit.svg";
import save from "../../../assets/svg/save.svg";
import axios from "axios";

const Info = () => {
  const [tempData, setTempData] = useState([]);
  const [changed, setChanged] = useState(false);

  const fetchCustomerData = async () => {
    const getCustomer = localStorage.getItem("commercejs_customer_id");

    const url = new URL(`https://api.chec.io/v1/customers/${getCustomer}`);

    const headers = {
      "X-Authorization":
        "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const getCustomerData = await axios.get(url, { headers });
    setTempData(getCustomerData.data);
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: "",
    name: "",
    surname: "",
    phone: "",
    date: "",
  });

  const onSubmit = (data) => {
    const sendData = async () => {
      const getCustomer = localStorage.getItem("commercejs_customer_id");
      const url = new URL(`https://api.chec.io/v1/customers/${getCustomer}`);

      const headers = {
        "X-Authorization":
          "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const body = {
        email: data.email,
        phone: data.phone,
        lastname: data.surname,
        firstname: data.name,
      };

      const sendData = await axios.put(url, body, { headers });
    };

    sendData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-container'>
          <div className='left'>
            <h3>Şəxsi məlumatlar</h3>

            <div>
              <label>Ad</label> <br />
              <input
                type='text'
                name='name'
                defaultValue={tempData.firstname}
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                  onChange: () => setChanged(true),
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
                defaultValue={tempData.email}
                onChange={() => setChanged(true)}
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  onChange: () => setChanged(true),
                })}
              />
              <br />
              <small className='text-danger'>
                {errors?.email && errors.email.message}
              </small>
            </div>
          </div>

          <div className='right'>
            <div>
              <label>Soyad</label> <br />
              <input
                type='text'
                name='surname'
                defaultValue={tempData.lastname}
                onChange={() => setChanged(true)}
                {...register("surname", {
                  required: {
                    value: true,
                    message: "surname is required",
                  },
                  onChange: () => setChanged(true),
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
                defaultValue={tempData.phone}
                onChange={() => setChanged(true)}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone is required",
                  },
                  onChange: () => setChanged(true),
                })}
              />
              <br />
              <small className='text-danger'>
                {errors?.phone && errors.phone.message}
              </small>
            </div>
          </div>
        </div>
        <div className='submit-btn'>
          {changed ? (
            <button type='submit'>
              <span>
                <img src={save} alt='save' />
              </span>
              {"  "}
              Yadda saxla
            </button>
          ) : (
            <button type='submit'>
              <span>
                <img src={edit} alt='edit' />
              </span>
              {"  "}
              Məlumatları yenilə
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Info;
