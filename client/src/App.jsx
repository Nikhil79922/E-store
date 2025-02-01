/* eslint-disable no-undef */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Invoice from "./components/Invoice";
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/checkout';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import { CartProvider } from './context/CartContext';


import AdminHome from './components/AdminHome';
import ResetPassword from './components/Resetpassword';
//Redux Import
import { useSelector } from 'react-redux';

const App = () => {
//Redux
  const globalLink=useSelector((state)=>state.link);
  const toggle=useSelector((state)=>state.toggle);

  const token = localStorage.getItem('token');

const auth=async ()=>{

  const response = await fetch(globalLink+'auth',{
    method: 'GET',
  headers:{'Authorization':`Bearer ${token}`}
  }) 
  const data = response.status;

if(data==403){
  console.log("should not runn")
  localStorage.removeItem('token')
  localStorage.removeItem('ROLE')
  toggle
}
}

useEffect(()=>{
  auth()
},[])

  return (
    <Router>
      <CartProvider>

        {/* <loginContext.Provider value={{ logInData, setlogInData }}> */}
        {/* <toggleLogin.Provider value={{ isLoggedIn, setIsLoggedIn }}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/adminhome" element={<AdminHome/>} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        {/* </toggleLogin.Provider> */}
        {/* </loginContext.Provider> */}

      </CartProvider>
    </Router>
  );
};

export default App;