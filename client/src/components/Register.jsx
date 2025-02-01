/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Transition } from '@headlessui/react';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('ROLE_USER');
  const [notifications, setNotifications] = useState([]); // Array for notifications
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");
  
  const globalLink = useSelector((state) => state.link);
  const timeoutRef = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotifications([]); // Reset notifications
    
    try {
      await axios.post(globalLink + 'auth/SignUp', {
        name,
        email,
        phone,
        role,
        password,
      });
      navigate('/login');
    } catch (error) {
      let errorMessage = 'Registration failed. Please check the form and try again.';
      let errorDetails = [];

      if (error.response && error.response.data) {
        errorMessage = error.response.data.message;
        errorDetails = error.response.data.errors || [];
      }

      const newNotification = {
        message: errorMessage,
        details: errorDetails,
        id: Date.now(), // Unique ID for each notification
      };

      setNotifications((prev) => [...prev, newNotification]);
      handleProgressBar(newNotification.id);
    }
  };

  const handleProgressBar = (id) => {
    const progressDuration = 4000; // Total duration for the progress bar
    const intervalDuration = 40; // Update interval
    const updates = (progressDuration / intervalDuration); // Total updates to reach 100%

    let progressValue = 0;

    timeoutRef.current = setTimeout(() => {
      const interval = setInterval(() => {
        progressValue += (100 / updates);
        setNotifications((prev) => 
          prev.map((notif) =>
            notif.id === id ? { ...notif, progress: progressValue } : notif
          )
        );

        if (progressValue >= 100) {
          clearInterval(interval);
          setNotifications((prev) => prev.filter((notif) => notif.id !== id));
        }
      }, intervalDuration);
    }, 0);
  };

  return (
    
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Register</h2>

        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-300">Phone No.</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-300">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            >
              <option value="ROLE_USER">User</option>
              <option value="ROLE_ADMIN">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Register</button>
        </form>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
        {notifications.map((notification) => (
          <Transition
            key={notification.id}
            show={true}
            enter="transition ease-in-out duration-500 transform"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-full opacity-0"
          >
            <div className="bg-gradient-to-t from-gray-900 to-gray-800 border border-gray-700 text-white p-4 rounded-lg shadow-lg flex flex-col w-80 mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Registration Error</h3>
                <button
                  onClick={() => setNotifications((prev) => prev.filter((n) => n.id !== notification.id))}
                  className="text-white text-xl font-bold hover:opacity-80 transition-opacity"
                >
                  ✖️
                </button>
              </div>
              <p>{notification.message}</p>
              {notification.details.length > 0 && (
                <div className="mt-2">
                  {notification.details.map((detail, index) => (
                    <p key={index} className="text-red-400">{detail}</p>
                  ))}
                </div>
              )}
              {/* Progress Bar */}
              <div className="relative w-full h-1 bg-gray-600 mt-2 rounded-lg overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-6000"
                  style={{ width: `${notification.progress || 0}%` }}
                ></div>
              </div>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Register;
