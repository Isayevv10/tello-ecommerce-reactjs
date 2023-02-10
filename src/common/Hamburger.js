import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/hamburger.scss";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "../redux/recuder/openReducer";
import { commerce } from "../commerce";
import { useNavigate, createSearchParams } from "react-router-dom";

const Hamburger = () => {
  const navigate = useNavigate();
  const [cat, setCat] = useState([]);

  const fetchCategories = async () => {
    const res = await commerce.categories.retrieve("cat_yA6nld2v3oEWbz", {
      depth: 35,
    });
    setCat(res.children);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const goSite = (name) => {
    if (name === "Bütün Brendlər") {
      name = "BUTUN-BRENDLER";
    }
    navigate({
      pathname: "/products",
      search: createSearchParams({
        brand: name,
      }).toString(),
    });
  };

  const {
    isOpen: { isOpen },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={`${isOpen ? "sidenav" : "container-sidebar"}`}>
      <div className='navbar'>
        <div id='mdiv' onClick={() => dispatch(setIsOpen(false))}>
          <div className='mdiv'>
            <div className='md'></div>
          </div>
        </div>

        <div className='navbar-logo'></div>
      </div>

      <div className='links'>
        {cat.map((item) => {
          return (
            <div key={item.id} onClick={() => goSite(item.name)}>
              {item.name}
            </div>
          );
        })}
      </div>

      <div className='btns'>
        <div>
          <button>
            <Link to='/login' className='sign-up'>
              Daxil ol
            </Link>
          </button>
        </div>
        <div>
          <button>
            <Link to='/signup' className='sign-in'>
              Qeydiyyat
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
