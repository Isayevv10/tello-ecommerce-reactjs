import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signUp.scss";
import facebook from "../../assets/svg/fb-icon.svg";
import google from "../../assets/svg/google-icon.svg";
import signupImg from "../../assets/images/signup-img.png";

const SignUp = () => {
  const navigate = useNavigate();

  const signUpFunc = async (taken) => {
    const url = new URL("https://api.chec.io/v1/customers");

    const headers = {
      "X-Authorization":
        "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = {
      email: taken.email,
      firstname: taken.name,
      lastname: taken.surname,
      phone: taken.phone,
    };

    const datas = await axios.post(url, body, { headers });
    navigate("/login");
  };

  // form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    surname: "",
    phone: "",
  });

  const onSubmit = (data) => {
    signUpFunc(data);
    reset();
  };

  return (
    <div className='container-signup'>
      <div className='signup-1'>
        <h2>Qeydiyyat</h2>

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

        <div className='signUp-form'>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <label>Soyad</label>
              <br />
              <input
                type='text'
                name='name'
                placeholder='Soyadınızı daxil edin'
                {...register("surname", {
                  required: {
                    value: true,
                    message: "Surname is required",
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
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <br />
              <small className='text-danger'>
                {errors?.email && errors.email.message}
              </small>
            </div>
            <div>
              <label>Mobil nömrə</label> <br />
              <input
                type='number'
                name='phone'
                placeholder='Mobil nömrənizi daxil edin'
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

            <div className='checkboxInput'>
              <input
                type='checkbox'
                name='checkbox'
                {...register("checkbox")}
              />
              <label>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  İstifadəçi şərtləri{" "}
                </span>
                ilə razıyam
              </label>
            </div>
            <button type='submit'>
              <p>Qeydiyyat</p>
            </button>
          </form>
          <div className='linkToLogin'>
            Artıq hesabınız var? <Link to='/login'>Daxil olun</Link>
          </div>
        </div>
      </div>

      <div className='signup-2'>
        <img src={signupImg} alt='' />
        <div>
          Artıq hesabınız var? <Link to='/login'>Daxil olun</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
