import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/brands.css";
import asus from "../../../assets/images/asus.png";
import toshiba from "../../../assets/images/toshiba.png";
import bosch from "../../../assets/images/bosch.png";
import electrolux from "../../../assets/images/electrolux.png";
import gorenje from "../../../assets/images/gorenje.png";
import philips from "../../../assets/images/philips.png";
import hp from "../../../assets/images/hp.png";
import gucci from "../../../assets/images/gucci.png";

const Brands = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          376: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img src={toshiba} alt='toshiba' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bosch} alt='bosch' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gorenje} alt='gorenje' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={electrolux} alt='electrolux' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={philips} alt='philips' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hp} alt='hp' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gucci} alt='gucci' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asus} alt='asus' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
