/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faUser, faCog, faTachometerAlt, faBoxOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/adminHome" className="text-2xl font-bold">
          <img src="https://design4users.com/wp-content/uploads/2016/10/horsy_animation_logo_tubik_studio.gif" alt="Admin Logo" className="h-[40px] w-[65px] rounded-xl" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/adminHome" className="hover:underline flex items-center">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
            Dashboard
          </Link>
          <Link to="/products" className="hover:underline flex items-center">
            <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
            Products
          </Link>
          <Link to="/profile" className="hover:underline flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Profile
          </Link>
          <Link to="/settings" className="hover:underline flex items-center">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </Link>
          <Link to="/messages" className="hover:underline flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Messages
          </Link>
        </div>

        {/* Logout Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="ml-2">Logout</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="block md:hidden">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4 space-y-2">
          <Link to="/adminHome" className="block px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Dashboard
          </Link>
          <Link to="/products" className="block px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
            Products
          </Link>
          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Profile
          </Link>
          <Link to="/settings" className="block px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </Link>
          <Link to="/messages" className="block px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Messages
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
