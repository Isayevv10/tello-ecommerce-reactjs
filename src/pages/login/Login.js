import React from "react";
import "./style/login.scss";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../assets/svg/fb-icon.svg";
import google from "../../assets/svg/google-icon.svg";
import signupImg from "../../assets/images/signup-img.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const logedIn = async (taken) => {
    const url = new URL("https://api.chec.io/v1/customers/email-token");

    const headers = {
      "X-Authorization":
        "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = {
      email: taken.email,
      base_url: "http://localhost:3000/exchange-token/",
    };

    const customerData = await axios.post(url, body, { headers });
    navigate("/userMail");
  };

  // form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    email: "",
    name: "",
    surname: "",
    date: "",
  });

  const handleLogin = (data) => {
    logedIn(data);
    reset();
  };

  const registerOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <div className='container-login'>
      <div className='login-1'>
        <h2>Daxil ol</h2>

        <div className='register-choice'>
          <div>
            <div className='img-div-fb'>
              <img src={facebook} alt='fb' />
            </div>
            <span> Facebook ilə</span>
          </div>

          <div>
            <div className='img-div-google'>
              <img src={google} alt='google' />
            </div>
            <span> Google ilə</span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>ve ya</div>

        <div className='login-form'>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label>Ad</label> <br />
              <input
                type='text'
                name='name'
                placeholder='Adınızı daxil edin'
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
              <label>Soyad</label> <br />
              <input
                type='text'
                name='surname'
                placeholder='Soyadınızı daxil edin'
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
              <label>Email</label> <br />
              <input
                type='email'
                name='email'
                placeholder='nümunə@gmail.com'
                {...register("email", registerOptions.email)}
              />
              <br />
              <small className='text-danger'>
                {errors?.email && errors.email.message}
              </small>
            </div>

            <div className='password-question'>
              <label>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  <Link>Şifrəni unutmusunuz?</Link>
                </span>
              </label>
            </div>
            <button type='submit'>
              <Link>Daxil ol</Link>
            </button>
          </form>
          <div className='linkToSignup'>
            Hesabınız yoxdur? <Link to='/signup'>Qeydiyyatdan keçin</Link>
          </div>
        </div>
      </div>

      <div className='login-2'>
        <img src={signupImg} alt='' />
        <div>
          Hesabınız yoxdur? <Link to='/signup'>Qeydiyyatdan keçin</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
