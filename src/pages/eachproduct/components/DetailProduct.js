import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/detailProduct.scss";
import cart from "../../../assets/svg/cart.svg";
import star from "../../../assets/svg/star.svg";
import noStar from "../../../assets/svg/no-star.svg";
import { useSelector, useDispatch } from "react-redux";
import { setCart1 } from "../../../redux/recuder/cartReducer";
import { commerce } from "../../../commerce";

const DetailProduct = ({ full, setColor }) => {
  const [countProduct, setCountProduct] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    dispatch(setCart1(item));
  };

  const getPlusProduct = () => {
    setCountProduct((prev) => prev + 1);
  };

  const getMinusProduct = () => {
    if (countProduct <= 1) {
      return countProduct;
    } else {
      return setCountProduct((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className='detail-product'>
        <h2 dangerouslySetInnerHTML={{ __html: full.description }}></h2>

        <div className='stars'>
          <span>
            <img src={star} alt='star' />
          </span>
          <span>
            <img src={star} alt='star' />
          </span>
          <span>
            <img src={star} alt='star' />
          </span>
          <span>
            <img src={star} alt='star' />
          </span>
          <span>
            <img src={noStar} alt='noStar' />
          </span>
          <span className='count-comment'> {" (226) "} </span>
          <Link className='comment'>57 rəy</Link>
        </div>

        <div className='amount'>
          <div> {full?.price?.formatted} $</div>
          <div className='addToCartBtn hidden'>
            <img src={cart} alt='cart' />
            <button onClick={() => handleAddToCart(full?.id, countProduct)}>
              Səbətə at
            </button>
          </div>
        </div>

        <div className='color'>
          <span>Rəng: </span>
          <span>
            {full?.variant_groups?.map((vrt) => {
              return (
                <span key={vrt.id}>
                  {vrt.options.map((opt) => {
                    return (
                      <span onClick={() => setColor(opt.assets)} key={opt.id}>
                        {opt.name}{" "}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        </div>

        <div className='memory'>
          <span>Yaddaş: </span>
          <span>256GB </span>
          <span>64GB </span>
          <span>128GB </span>
        </div>

        <div className='countProduct'>
          <span>Miqdarı: </span>
          <button onClick={getMinusProduct}>-</button>
          <span>{countProduct}</span>
          <button onClick={getPlusProduct}>+</button>
        </div>

        <div className='addToCartBtn'>
          <img src={cart} alt='cart' />
          <button onClick={() => handleAddToCart(full?.id, countProduct)}>
            Səbətə at
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
