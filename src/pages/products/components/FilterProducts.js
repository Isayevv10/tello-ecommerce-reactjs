import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/filterProducts.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import sira from "../../../assets/svg/sira.svg";
import filter from "../../../assets/svg/filter.svg";
import { setIsOpen } from "../../../redux/recuder/openReducer";
import { useDispatch } from "react-redux";

const FilterProducts = ({ pageProduct, loading, setFilterOpen }) => {
  const [searchSelectParams, setSearchSelectParams] = useSearchParams();
  const dispatch = useDispatch();

  const selectParams = (e) => {
    searchSelectParams.set("sortBy", "price");
    searchSelectParams.set("sortDirection", e.target.value);

    setSearchSelectParams(searchSelectParams);
  };

  return (
    <div>
      <div className='mobie-filter'>
        <div className='filter-1' onClick={() => setFilterOpen(true)}>
          <img src={sira} alt='' />
          <span> Siralama</span>
        </div>
        <div className='filter-2' onClick={() => dispatch(setIsOpen(true))}>
          <img src={filter} alt='' />
          <span> Filterlemeler</span>
        </div>
      </div>

      <div className='select-filter'>
        <div className='count-products'>{`${pageProduct?.length} məhsul tapıldı`}</div>
        <div className='select'>
          <select onChange={selectParams}>
            <option value='asc'>Ucuzdan bahaya</option>
            <option value='desc'>Bahadan ucuza</option>
          </select>
        </div>
      </div>

      <div className='all-product'>
        {loading
          ? Array(6)
              .fill(0)
              .map((item, index) => (
                <Skeleton key={index} className='skeleton' />
              ))
          : pageProduct?.map((item) => {
              return (
                <div className='card' key={item.id}>
                  <Link to={`/products/${item.id}`} key={item.id}>
                    <img src={item.image.url} alt='mobile' />
                    <h4
                      className='desc'
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></h4>
                    <div className='price'>
                      <span className='real-price'>{`   ${item.price.formatted} $`}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default FilterProducts;
