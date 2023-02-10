import React, { useState, useEffect, useRef } from "react";
import person from "../assets/svg/person.svg";
import basket from "../assets/svg/basket.svg";
import hamburger from "../assets/svg/hamburger.svg";
import "./style/navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "../redux/recuder/openReducer";
import axios from "axios";
import useDebounce from "./hooks/useDebounce";

const Navbar = () => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state);
  const { cart1 } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const [filteredData, setFilteredData] = useState([]);
  const debounceInput = useDebounce(inputValue, 1400);

  useEffect(() => {
    setFilteredData([]);

    if (debounceInput || inputValue.length < 0) handleFilter();

    async function handleFilter() {
      const url = new URL("https://api.chec.io/v1/products");

      const params = {
        query: debounceInput,
      };
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );

      const headers = {
        "X-Authorization":
          "sk_test_49325ddb3ab99638c989760a938abd3b56025dbd7c123",
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const searchData = await axios.get(url, { headers });
      setFilteredData(searchData.data.data);
    }
  }, [debounceInput]);

  return (
    <div>
      <div className='navbar-container'>
        <Link to='/'>
          <div className='logo'></div>
        </Link>

        <div className='searching'>
          <div>
            <input
              type='search'
              placeholder={`Searching...`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              ref={inputRef}
            />
          </div>
          <div>
            {filteredData?.length !== 0 && (
              <div className='dataResult'>
                {filteredData?.map((t, index) => {
                  return (
                    <Link to={`/products/${t.id}`} key={index}>
                      <div className='search-container'>
                        <div>
                          <img
                            src={t.image.url}
                            alt=''
                            width='64'
                            height='64'
                          />
                        </div>
                        <div>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: t.description,
                            }}
                          ></span>
                          <p>{t.price.formatted} $</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className='mini-logos'>
          <div>
            {logged ? (
              <Link to='/profil'>
                <img src={person} alt='person' />
              </Link>
            ) : (
              <Link to='/signup'>
                <img src={person} alt='person' />
              </Link>
            )}
          </div>
          <div className='basket-container'>
            <Link to='cart'>
              <img src={basket} alt='basket' />
            </Link>
            <div className='product-count'>{cart1?.total_items}</div>
          </div>
        </div>
      </div>

      {/* mobile starts */}

      <div className='mobile-navbar-container'>
        <div className='mobile-container'>
          <div className='hamburger' onClick={() => dispatch(setIsOpen(true))}>
            <img src={hamburger} alt='hamburger' />
          </div>

          <Link to='/'>
            <div className='logo'></div>
          </Link>

          <div className='mini-logos'>
            <div>
              {logged ? (
                <Link to='/profil'>
                  <img src={person} alt='person' />
                </Link>
              ) : (
                <Link to='/signup'>
                  <img src={person} alt='person' />
                </Link>
              )}
            </div>
            <div className='basket-container'>
              <Link to='/cart'>
                <img src={basket} alt='basket' />
              </Link>
              <div className='product-count'>{cart1?.total_items}</div>
            </div>
          </div>
        </div>

        <div className='searching'>
          <div>
            <input
              type='search'
              placeholder={`Searching...`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              ref={inputRef}
            />
          </div>
          <div>
            {filteredData?.length !== 0 && (
              <div className='dataResult'>
                {filteredData?.map((t, index) => {
                  return (
                    <Link to={`/products/${t.id}`} key={index}>
                      <div className='search-container'>
                        <div>
                          <img
                            src={t.image.url}
                            alt=''
                            width='64'
                            height='64'
                          />
                        </div>
                        <div>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: t.description,
                            }}
                          ></span>
                          <p>{t.price.formatted} $</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile ends */}
    </div>
  );
};

export default Navbar;
