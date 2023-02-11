import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./common/Categories";
import Footer from "./common/Footer";
import Hamburger from "./common/Hamburger";
import Navbar from "./common/Navbar";
import EachProduct from "./pages/eachproduct/EachProduct";
import Home from "./pages/homepage/Home";
import AllProducts from "./pages/products/AllProducts";
import Cart from "./pages/carts/Cart";
import SingUp from "./pages/signup/SingUp";
import Profil from "./pages/profil/Profil";
import Login from "./pages/login/Login";
import ExchangeToken from "./pages/exchange-token/ExchangeToken";
import Favs from "./pages/profil/components/Favs";
import Info from "./pages/profil/components/Info";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import PublicRoute from "./pages/Auth/PublicRoute";
import { useDispatch } from "react-redux";
import { setCart1 } from "./redux/recuder/cartReducer";
import { commerce } from "./commerce";
import UserMail from "./pages/login/UserMail";
import Payment from "./pages/payment/Payment";

function App() {
  const dispatch = useDispatch();

  const fetchCart = async () => {
    const res = await commerce.cart.retrieve();
    dispatch(setCart1(res));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className='App'>
      <Navbar />

      <Hamburger />

      <Categories />

      <Routes>
        <Route path='/tello-ecommerce-reactjs' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:id' element={<EachProduct />} />
        <Route path='/cart' element={<Cart />} />

        {/* <Route path='/payment' element={<Payment />}></Route> */}

        <Route element={<PublicRoute />}>
          <Route path='/exchange-token/:token' element={<ExchangeToken />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userMail' element={<UserMail />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/profil' element={<Profil />}>
            <Route index element={<Info />}></Route>
            <Route path='/profil/favs' element={<Favs />}></Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
