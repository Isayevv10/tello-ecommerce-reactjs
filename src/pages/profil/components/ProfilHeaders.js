import React from "react";
import "../style/headers.scss";
import heart from "../../../assets/svg/heart.svg";
import user from "../../../assets/svg/person.svg";
import logout from "../../../assets/svg/logout.svg";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogged } from "../../../redux/recuder/loginReducer";
import { commerce } from "../../../commerce";

const ProfilHeaders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutFunc = () => {
    const res = commerce.customer.logout();
    console.log(res);
    localStorage.removeItem("commercejs_customer_id");
    localStorage.removeItem("commercejs_customer_token");
    localStorage.removeItem("logged");
    dispatch(setIsLogged(false));
    navigate("/tello-ecommerce-reactjs");
  };

  return (
    <div className='container'>
      <h3>Profilim</h3>
      <div className='headers'>
        <div>
          <span>
            <img src={user} alt='fav' />
          </span>
          <Link to='/profil'>
            <span>Şəxsi məlumatlar</span>
          </Link>
        </div>
        <div>
          <span>
            <img src={heart} alt='fav' />
          </span>
          <Link to='/profil/favs'>
            <span>Sifarislerim</span>
          </Link>
        </div>
        <div>
          <span>
            <img src={logout} alt='fav' />
          </span>
          <span onClick={logoutFunc}>Çıxış</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilHeaders;
