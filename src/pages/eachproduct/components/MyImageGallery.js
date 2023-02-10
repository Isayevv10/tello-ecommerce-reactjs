import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles/myImageGallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyImageGallery = ({ full, urls }) => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop useKeyboardArrows showIndicators={false}>
        {urls?.length === 0
          ? full?.assets?.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.url} />
                </div>
              );
            })
          : urls?.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.url} />
                </div>
              );
            })}
      </Carousel>
    </div>
  );
};

export default MyImageGallery;
