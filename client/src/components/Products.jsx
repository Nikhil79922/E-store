/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Typewriter from 'react-typewriter-effect';
import { useSelector } from 'react-redux';

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [collection, setCollection] = useState([]);
  const [filter, setFilter] = useState("Trending");

  const tokenAvailable = localStorage.getItem('token')
  
  if(tokenAvailable == null) {
    navigate('/login');
  }

  // Redux
  const globalLink = useSelector((state) => state.link);

  // Function to fetch products based on the selected category
  const display = async (filterValue) => {
    try {
      const response = await fetch(globalLink + 'products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: filterValue }), // Sending selected category
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      // Check if the data is an array
      if (Array.isArray(data)) {
        setCollection(data); // Set products based on category if it's an array
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/checkout");
  };

  const handleFilterChange = async (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    // Trigger the display function when dropdown value changes
    await display(selectedFilter);
  };

  // Fetch initial products when the component mounts
  useEffect(() => {
    display(filter); // Fetch products based on initial filter
  }, [filter]);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      {/* Header Section with Dropdown */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 mb-8 rounded-lg shadow-lg flex flex-col lg:flex-row lg:justify-between items-center">
        <h2 className="text-4xl font-bold leading-tight mb-4 lg:mb-0">
          <Typewriter
            textStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '3rem', fontWeight: 'bold' }}
            startDelay={500}
            cursorColor="#ffcb05"
            multiText={[
              "Top Picks in Tech Innovation",
              "Cutting-Edge Tech Solutions",
              "Latest in Advanced Technology",
              "Premium Technical Products",
              "Exclusive High-Tech Collection",
              "Trending Technical Devices",
              "Innovative Products for Tech Enthusiasts",
              "State-of-the-Art Technology Showcase",
              "Tech Must-Haves of the Year",
              "Top-Rated Technology Essentials",
            ]}
            multiTextDelay={2000}
            typeSpeed={80}
            deleteSpeed={50}
            loop={true}
          />
        </h2>

        {/* Futuristic Dropdown */}
        <div className="relative inline-block">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="bg-gray-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer transform hover:scale-105"
          >
            <option value="Trending">Trending</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Mouse">Mouse</option>
            <option value="Motherboard">Motherboard</option>
            <option value="Robots">Robots</option>
            <option value="Headphones">Headphones</option>
            <option value="Speakers">Speakers</option>
          </select>

          {/* Glowing Green Dot */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-teal-400 transform translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
            style={{
              boxShadow: '0 0 4px 2px rgba(64, 224, 208, 0.6)', // Smaller glow
            }}>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {collection.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 hover:bg-gray-700 text-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md border border-gray-700 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-bold mb-2 text-teal-400">{product.price}</p>
              <p className="text-sm text-gray-400 mb-4">{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg w-full transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
