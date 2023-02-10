import React, { useState } from "react";
import "../styles/accordion.scss";
import FilterAcc from "./FilterAcc";
import exit from "../../../assets/svg/exit.svg";
import "../styles/siraHamburger.scss";

const SiraHamburger = ({
  setFilterOpen,
  filterOpen,
  acc,
  brendCat,
  setGetBrend,
}) => {
  return (
    <div className={`${filterOpen ? "sidenav" : "container-sidebar"}`}>
      <>
        <div>
          <img
            src={exit}
            alt='edit'
            onClick={() => setFilterOpen(false)}
            style={{ cursor: "pointer" }}
          />{" "}
          <span>{"Filterləmələr"}</span>
        </div>

        <div>
          {acc.map((accs) => (
            <div key={accs.id}>
              <FilterAcc
                accs={accs}
                brendCat={brendCat}
                setGetBrend={setGetBrend}
              />
            </div>
          ))}
        </div>

        <div
          onClick={() => setFilterOpen(false)}
          style={{ cursor: "pointer" }}
          className='sira-btn'
        >
          Filterlənmiş məhsulları göstər
        </div>
      </>
    </div>
  );
};

export default SiraHamburger;
