/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Invoice = () => {
  const { state } = useLocation();
  const cart = state?.purchasedItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="rgba(255, 255, 255, 0.05)" />
          <circle cx="150" cy="150" r="100" fill="rgba(255, 255, 255, 0.05)" />
        </svg>
      </div>
      <div className="container mx-auto py-10 px-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
          Invoice
        </h2>
        {cart.length === 0 ? (
          <p className="text-lg text-gray-300">
            No invoice to display.{" "}
            <Link to="/products" className="text-blue-400 hover:underline">
              Go back to Products
            </Link>
          </p>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
            <ul className="bg-gray-800 p-6 rounded-lg shadow-md">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-900 shadow-md rounded-lg p-4 mb-4 flex items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover mr-4 rounded-lg border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xl font-bold text-green-400 mb-2">
                      {item.price}
                    </p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg block text-center mt-6"
            >
              Back to Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice;
