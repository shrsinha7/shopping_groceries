import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Home from '../Home/home'
import Login from '../Login/login'
import SignUp from '../Signup/signup'
import Product from '../../containers/Product/product'

export default function Routing() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product/:id" element={<Product/>} />
          {/* <Route path="*" exact={true} component={PageNotFound} /> */}
        </Routes>
    </>
  );
}