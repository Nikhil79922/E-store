/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const Checkout = () => {
  const { cart, addToCart, removeFromCart, clearCart, isLoggedIn } = useCart();
  const navigate = useNavigate();

  const handleCompletePurchase = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    // Clear the cart and navigate to the invoice page with cart data
    clearCart();
    navigate("/invoice", { state: { purchasedItems: cart } });
  };

  const handleAddMoreProducts = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-10 px-4 relative overflow-hidden">
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
        <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Checkout
        </h2>
        {cart.length === 0 ? (
          <p className="text-lg text-gray-300">
            Your cart is empty.{" "}
            <Link to="/products" className="text-purple-400 hover:underline">
              Go back to Products
            </Link>
          </p>
        ) : (
          <div>
            <ul className="bg-gray-800 p-6 rounded-lg shadow-md">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-900 shadow-md rounded-lg p-4 mb-4 flex items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover mr-4 rounded-lg border-2 border-purple-600"
                  />
                  <div className="flex-grow text-gray-200">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-xl font-bold text-yellow-400">{item.price}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg mx-1 transition-transform transform hover:scale-105"
                    >
                      -
                    </button>
                    <span className="mx-2 text-lg text-gray-100">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg mx-1 transition-transform transform hover:scale-105"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleAddMoreProducts}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Add More Products
              </button>
              <button
                onClick={handleCompletePurchase}
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;





