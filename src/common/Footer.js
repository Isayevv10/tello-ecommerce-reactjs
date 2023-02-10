import React from "react";
import "./style/footer.scss";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import insta from "../assets/svg/instagram.svg";
import fb from "../assets/svg/facebook.svg";
import twit from "../assets/svg/twitter.svg";
import yt from "../assets/svg/youtube.svg";
import location from "../assets/svg/location.svg";
import message from "../assets/svg/message.svg";
import phone from "../assets/svg/phone.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='logos'>
          <div className='big-logo'>
            <img src={logo} alt='logo' />
          </div>

          <div className='mini-logos'>
            <div>
              <img src={insta} alt='insta' />
            </div>
            <div>
              <img src={fb} alt='fb' />
            </div>
            <div>
              <img src={yt} alt='yt' />
            </div>
            <div>
              <img src={twit} alt='twit' />
            </div>
          </div>
        </div>

        <div className='menu'>
          <h4>Menu</h4>
          <p>
            <Link to='/'>Yeni</Link>
          </p>
          <p>
            <Link to='/'>Endirimler</Link>
          </p>
          <p>
            <Link to='/'>Aksessuarlar</Link>
          </p>
          <p>
            <Link to='/'>Bütün brendlərutun brendler</Link>
          </p>
        </div>

        <div className='help'>
          <h4>Kömək</h4>
          <p>
            <Link to='/'>Tez-tez soruşulan suallar</Link>
          </p>
          <p>
            <Link to='/'>Çatdırılma xidməti</Link>
          </p>
          <p>
            <Link to='/'>Geri qaytarılma şərtləri</Link>
          </p>
        </div>

        <div className='contact'>
          <h4>Əlaqə</h4>
          <div className='connect'>
            <div>
              <img src={location} alt='location' />
            </div>
            <div>M. K. Ataturk avenue 89, Baku, Azerbaijan</div>
          </div>

          <div className='connect'>
            <div>
              <img src={message} alt='message' />
            </div>
            <div>example@gmail.com</div>
          </div>

          <div className='connect'>
            <div>
              <img src={phone} alt='phone' />
            </div>
            <div>*2108</div>
          </div>
        </div>
      </div>

      <div className='footer-author'>
        <div>
          <p>© PeojectX 2023. Bütün hüquqlar qorunur.</p>
        </div>
        <div className='copywrite'>
          <p>Qaydalar və şərtlər</p>
          <p>Məxfilik siyasəti</p>
        </div>
      </div>

      <div className='footer-author-mobile'>
        <div className='copywrite'>
          <p>Qaydalar və şərtlər</p>
          <p>Məxfilik siyasəti</p>
        </div>
        <div>
          <p>© ProjectX 2023. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
