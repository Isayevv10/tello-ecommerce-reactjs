import React from "react";
import { Link } from "react-router-dom";
import "../styles/someProducts.css";
const SomeProduct = () => {
  return (
    <div>
      <div className='some-products'>
        <div className='item-1'>
          <div className='container-details'>
            <p className='product-header'>Telefon</p>
            <Link to='/products' className='link'>
              Məhsullara keçid {">"}
            </Link>
          </div>
          <div className='item-1-bg'></div>
        </div>

        <div className='item-2'>
          <div className='item-2-parent'>
            <div className='flex-1'>
              <div className='container-details'>
                <p className='product-header'>Smart Saat</p>
                <Link to='/products' className='link'>
                  Məhsullara keçid {">"}
                </Link>
              </div>
            </div>
            <div className='flex-2'></div>
          </div>
        </div>

        <div className='item-3'>
          <div className='item-3-parent'>
            <div className='flex-1'>
              <div className='container-details'>
                <p className='product-header'>Aksesuar</p>
                <Link to='/products' className='link'>
                  Məhsullara keçid {">"}
                </Link>
              </div>
            </div>
            <div className='flex-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeProduct;
