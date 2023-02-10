import React from "react";
import { Grid, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../../assets/images/slider1.png";
import image2 from "../../../assets/images/slider2.jpg";
import "../styles/_carousel.scss";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className='carousel-wrapper'>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 1,
        }}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
        autoplay={{ delay: 2000 }}
        className='mySwiper'
      >
        <SwiperSlide>
          <h1>Buy & Sell What's Now & Next</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            malesuada et leo faucibus
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <h1>Buy & Sell What's Now & Next</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            malesuada et leo faucibus
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt='' />
        </SwiperSlide>
      </Swiper>

      {/* mobile slider starts */}
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        className='proSwiper'
      >
        <SwiperSlide>
          <img src={image} alt='' />
          <h1>Buy & Sell What's Now & Next</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            malesuada et leo faucibus
          </p>
        </SwiperSlide>
      </Swiper>

      {/* mobile slider ends */}
    </div>
  );
};

export default Carousel;
