import React, { useEffect, useState } from "react";
import { commerce } from "../../../commerce";
import { Link } from "react-router-dom";
import "../styles/products.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MostSailigProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const res = await commerce.products.list({
      limit: 4,
    });
    setLoading(false);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='allProducts'>
      <div className='header-products'>
        <div>Ən çox satılan məhsullar</div>
        <div className='desktop-linkToProducts'>
          <Link to='/products' className='linkToProducts'>
            Hamısına bax {">"}
          </Link>
        </div>
      </div>

      <div className='card-container'>
        {loading
          ? Array(4)
              .fill(0)
              .map((item, index) => (
                <Skeleton key={index} className='skeleton' />
              ))
          : products.map((item) => {
              return (
                <Link to={`/products/${item.id}`} key={item.id}>
                  <div className='card' key={item.id}>
                    <img src={item.image.url} alt='mobile' />
                    <h4
                      className='desc'
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></h4>
                    <div className='price'>
                      <span style={{ textDecoration: "line-through" }}>
                        {"2750 $"}
                      </span>
                      <span className='real-price'>{`   ${item.price.formatted} $`}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>

      <div className='mobile-linkToProducts'>
        <Link to='/products' className='linkToProducts'>
          Hamısına bax {">"}
        </Link>
      </div>
    </div>
  );
};

export default MostSailigProducts;
