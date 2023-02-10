import React, { useEffect, useState } from "react";
import { commerce } from "../../../commerce";
import { Link } from "react-router-dom";
import "../styles/products.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const res = await commerce.products.list({
      category_slug: ["Apple"],
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
        <div>Yeni gələn məhsullar</div>
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
          : products.map((item, index) => {
              return (
                <Link to={`/products/${item.id}`} key={index}>
                  <div className='card'>
                    <img src={item.image.url} alt='mobile' />
                    <h4
                      className='desc'
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></h4>
                    <div className='price'>
                      <span>{`   ${item.price.formatted} $`}</span>
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

export default NewProducts;
