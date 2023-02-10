import React from "react";
import Brands from "./components/Brands";
import Details from "./components/Details";
import MostSailigProducts from "./components/MostSailigProducts";
import NewProducts from "./components/NewProducts";
import Accessuars from "./components/Accessuars";
import SomeProduct from "./components/SomeProduct";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <MostSailigProducts />
      <NewProducts />
      <Accessuars />
      <SomeProduct />
      <Details />
      <Brands />
    </div>
  );
};

export default Home;
