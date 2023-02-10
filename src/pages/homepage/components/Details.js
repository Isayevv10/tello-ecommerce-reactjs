import React from "react";
import "../styles/details.css";
import box from "../../../assets/svg/box.svg";
import medal from "../../../assets/svg/medal-star.svg";
import card from "../../../assets/svg/card-pos.svg";

const Details = () => {
  return (
    <div>
      <div className='detail-container'>
        <div>
          <img src={box} alt='box' />
          <h3>Çatdırılma</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
          </p>
        </div>
        <div>
          <img src={medal} alt='medal' />
          <h3>Kredit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
          </p>
        </div>
        <div>
          <img src={card} alt='card' />
          <h3>Zəmanət</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
