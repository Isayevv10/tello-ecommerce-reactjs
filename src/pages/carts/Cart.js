import React, { useEffect } from "react";
import "./cart.scss";
import del from "../../assets/svg/delete.svg";
import shopCart from "../../assets/svg/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { commerce } from "../../commerce";
import { setCart1 } from "../../redux/recuder/cartReducer";

const Cart = () => {
  const { cart1 } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleUpdateCart = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    dispatch(setCart1(item));
  };

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    dispatch(setCart1(item));
  };

  const EmptyCard = () => (
    <div>
      <div className='all-product-count'>
        Səbət ({cart1?.total_unique_items} məhsul)
      </div>
      <div className='empty-card-container'>
        <div>
          <img src={shopCart} alt='shpCart' />
        </div>
        <p>Səbətiniz halhazırda boşdur</p>
        <button>
          <Link to='/products'>Alış-verişə davam et</Link>
        </button>
      </div>
    </div>
  );

  const FilledCard = () => (
    <div className='cart-container'>
      <div className='all-product-count'>
        Səbət ({cart1?.total_unique_items} məhsul)
      </div>

      <div className='cart-flex-container'>
        <div className='cart-1'>
          {cart1?.line_items.map((item) => {
            return (
              <div className='cart-grid-container' key={item.id}>
                <div className='cart-grid-2'>
                  <img
                    src={item.image.url}
                    alt='image'
                    className='cart-image'
                  />
                </div>
                <div className='cart-grid-3'>
                  <p>{item.name}</p>
                  <div>
                    <span> {item.line_total.formatted} $</span>
                  </div>
                </div>
                <div className='cart-grid-4'>
                  <div className='productAmount'>
                    <div>
                      <button
                        onClick={() =>
                          handleUpdateCart(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <span>{item.quantity}</span>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          handleUpdateCart(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className='cart-grid-5'>
                  <img
                    src={del}
                    alt='remove'
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className='cart-2'>
          <table>
            <tbody>
              <tr>
                <th>Ümumi</th>
                <th></th>
              </tr>
              <tr>
                <td>Məbləğ</td>
                <td>{cart1?.subtotal?.formatted} $</td>
              </tr>
              <tr>
                <td>Çatdırılma</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Hədiyyə paketi</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Promo kode</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Cəmi</td>
                <td>{cart1?.subtotal?.formatted} $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* mobile basket start */}
      <div className='mobile-container'>
        {cart1?.line_items?.map((item) => {
          return (
            <div className='basket-container' key={item.id}>
              <div className='check-del'>
                <div>
                  <input type='checkbox' />
                </div>
                <div>
                  <img
                    src={del}
                    alt='del'
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </div>
              </div>

              <div className='img'>
                <img src={item.image.url} alt='' />
              </div>

              <p className='name-product'>{item.name}</p>

              <div className='amount-size'>
                <div>{cart1?.subtotal?.formatted} $</div>

                <div className='count'>
                  <div>
                    <button
                      onClick={() =>
                        handleUpdateCart(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <span>{item.quantity}</span>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        handleUpdateCart(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* mobile basket ends */}
    </div>
  );

  return (
    <div>{!cart1?.line_items?.length ? <EmptyCard /> : <FilledCard />}</div>
  );
};

export default Cart;
