/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-blue-800 to-indigo-900 h-64 flex items-center justify-center text-white text-5xl font-extrabold shadow-lg transition-all duration-500 transform hover:scale-105">
        Contact Us
      </div>

      {/* Enquiry Form */}
      <section className="container mx-auto py-16 px-4 md:px-8">
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide animate-pulse">
          Get in Touch
        </h2>
        <form className="bg-gray-900 p-10 rounded-lg shadow-xl max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-700 bg-gray-800 text-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-700 bg-gray-800 text-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input
              type="text"
              placeholder="Contact"
              className="w-full border border-gray-700 bg-gray-800 text-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-700 bg-gray-800 text-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full border border-gray-700 bg-gray-800 text-gray-100 p-4 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          ></textarea>
          <button className="bg-purple-700 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-purple-800 transition-transform transform hover:scale-105 duration-300">
            Submit
          </button>
        </form>
      </section>

      {/* Google Map */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-80 rounded-lg transition-transform duration-500 transform hover:scale-110"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531550092!3d-37.81627967975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d5e5dc1bc3d1!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1623312529868!5m2!1sen!2sau"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
