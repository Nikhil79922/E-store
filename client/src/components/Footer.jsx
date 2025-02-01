/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo & Company Name */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
              Company Logo
            </h2>
            <p className="text-sm text-gray-400">1234 Street Name, City, Country</p>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Contact Us</h3>
            <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-300">Email: contact@company.com</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i> {/* Replace with actual icons */}
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i> {/* Replace with actual icons */}
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i> {/* Replace with actual icons */}
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i> {/* Replace with actual icons */}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

