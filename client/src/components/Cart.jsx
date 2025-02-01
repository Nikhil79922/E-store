/* eslint-disable no-unused-vars */
// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-purple-600 hover:underline">Go back to Products</Link></p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700">{item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link
              to="/checkout"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
