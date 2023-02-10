import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../../commerce";
import DetailProduct from "./components/DetailProduct";
import MyImageGallery from "./components/MyImageGallery";
import "./eachproduct.scss";

const EachProduct = () => {
  const { id } = useParams();
  const [full, setFull] = useState([]);

  const [color, setColor] = useState([]);

  let urls = full?.assets?.filter((item) => {
    return color.indexOf(item.id) !== -1;
  });

  // fetch special product
  const fetchSpecialProduct = async () => {
    const response = await commerce.products.retrieve(id);
    setFull(response);
  };

  useEffect(() => {
    fetchSpecialProduct();
  }, []);

  return (
    <div>
      <div className='slider-container'>
        <div className='slider-show'>
          <MyImageGallery full={full} urls={urls} />
        </div>
        <div className='slider-details'>
          <DetailProduct full={full} setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
