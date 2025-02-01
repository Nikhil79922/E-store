/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSelector , useDispatch } from 'react-redux';
import {togglevalue} from "../redux/Slice/Toggle"

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  //Redux
  const toggle=useSelector((state)=>state.toggle);
  const dispatch =useDispatch();

  const toggleAdmin= localStorage.getItem("ROLE")
  const socialIcon= token == null ? false:true;
  const roles_admin = "ROLE_ADMIN";
  const roles_user = "ROLE_USER";

  // Check login status on component mount
  useEffect(() => {
    if (token) {
      dispatch(togglevalue()) // Set logged-in state
    }
  }, []);
console.log(toggle)
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    localStorage.removeItem(''); // Remove token from localStorage
     toggle
    navigate('/login'); // Redirect to login page
  };


  // Handle admin redirect
  const handleAdminClick = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <nav className="bg-slate-900 sm:h-[67px] p-4 shadow-lg">
      <div className="container  mx-auto flex items-center sm:justify-between">
        {/* Dynamic Logo */}
        <Link to="/" className="flex items-center text-white text-2xl font-bold">
          {!socialIcon ? (
            <img
            src="https://design4users.com/wp-content/uploads/2016/10/horsy_animation_logo_tubik_studio.gif" // Replace with the path to the default logo
            alt="Default Logo"
            className=" hidden  sm:block h-10 w-16 rounded-2xl"
            />
          ) : (
            <img
              src="https://media4.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif?cid=6c09b952g3hmlgd2mhts8t0f56cmh4vq86jqkl68gf2rjk7y&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" // Replace with the path to the logged-in logo
              alt="Logged-in Logo"
              className="hidden sm:block h-10 w-16 rounded-2xl bg-transparent"
            />
          )}

        </Link>

        <div className="flex items-center pr-[20vw] text-[14px] sm:text sm:pr-0 space-x-[9px] sm:space-x-6">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/products" className="text-white hover:underline">Products</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>

          {/* Conditionally render Login or Logout */}
          {!socialIcon ? (
            <Link to="/login" className="bg-white text-purple-600 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-300 transition">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
        <div className="flex items-center space-x-4">

          {toggleAdmin === roles_admin && socialIcon ? <Link to="/adminHome" className="bg-yellow-400 text-black font-bold  py-1 px-2 rounded-lg hover:bg-yellow-500 transition">Admin</Link> :
            <Link to="/adminHome" className="hidden">Admin</Link>
          }
          
          {toggleAdmin === roles_user || !socialIcon ? <div className='flex items-center space-x-4'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div> 
            : <div className=' hidden '>
            
             </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

