/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Typewriter from 'react-typewriter-effect';

const Home = () => {
  

  // Example products
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
      name: "Technical Product 1",
      price: "$10",
      description: "Detailed description of Technical Product 1",
    },
    {
      id: 2,
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-cutting-edge-display-podium-for-showcasing-products-high-tech-illuminated-neon-image_3770738.jpg",
      name: "Technical Product 2",
      price: "$20",
      description: "Detailed description of Technical Product 2",
    },
    {
      id: 3,
      image: "https://images6.alphacoders.com/133/1338694.png",
      name: "Technical Product 3",
      price: "$30",
      description: "Detailed description of Technical Product 3",
    },
    {
      id: 4,
      image: "https://e0.pxfuel.com/wallpapers/11/309/desktop-wallpaper-buy-logitech-g903-wireless-gaming-mouse-for-just-114-99-coupon.jpg",
      name: "Technical Product 4",
      price: "$40",
      description: "Detailed description of Technical Product 4",
    },
    {
      id: 5,
      image: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704018731195-f202bbeac8a7",
      name: "Technical Product 5",
      price: "$50",
      description: "Detailed description of Technical Product 5",
    },
    {
      id: 6,
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230419/pngtree-robot-kid-hi-tech-blue-eyes-image_2417250.jpg",
      name: "Technical Product 6",
      price: "$60",
      description: "Detailed description of Technical Product 6",
    },
    {
      id: 7,
      image: "https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Technical Product 7",
      price: "$70",
      description: "Detailed description of Technical Product 7",
    },
    {
      id: 8,
      image: "https://static6.depositphotos.com/1025323/620/i/450/depositphotos_6200159-stock-photo-digital-circuit.jpg",
      name: "Technical Product 8",
      price: "$80",
      description: "Detailed description of Technical Product 8",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div className="relative h-80 overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-r from-[#00000080] to-[#14141480]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-5xl font-extrabold bg-gradient-to-b from-[#33333380] to-transparent p-6">
          <Typewriter
            textStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '3rem', fontWeight: 'bold' }}
            startDelay={500}
            cursorColor="#ffcb05"
            multiText={[
              "Explore Our Vibrant Products",
              "Discover the Latest Innovations",
              "Explore Our Innovative Product Collection",
              "Find Your Perfect Match",
              "Unleash New Possibilities",
              "Experience Our Cutting-Edge Product Range",
              "Dive into Our Captivating Product Selection"
            ]}
            multiTextDelay={2000} // Delay between each text
            typeSpeed={80}
            deleteSpeed={50}
            loop={true} // Ensure this is set to true for continuous loop
          />
        </div>
      </div>

      {/* Product List */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-[#f5f5f5] mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#ffffff] mb-2">
                  {product.name}
                </h3>
                <p className="text-lg text-[#ffcb05] font-bold mb-4">
                  {product.price}
                </p>
                <p className="text-gray-400 mb-4">
                  {product.description}
                </p>
                <Link
                  to={`/products`}
                  className="bg-[#ffcb05] hover:bg-[#e0b705] text-gray-900 px-4 py-2 rounded-lg block text-center font-semibold transition duration-300 ease-in-out"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;






