/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Transition } from '@headlessui/react'; // Ensure you have headlessui installed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [progress, setProgress] = useState(0); // Start at 0% for the progress bar
  const navigate = useNavigate();
  const globalLink = useSelector((state) => state.link);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Hide the error toast after 4 seconds
    if (showErrorToast) {
      const timer = setTimeout(() => {
        setShowErrorToast(false);
      }, 4000);

      return () => clearTimeout(timer); // Clear the timer on unmount
    }
  }, [showErrorToast]);

  useEffect(() => {
    // Progress bar animation
    if (showErrorToast) {
      let progressTimer = 0;
      setProgress(0); // Reset progress when toast is shown
      const interval = setInterval(() => {
        progressTimer += 100; // Increment timer by 100ms
        setProgress((prev) => Math.min(100, prev + 2.5)); // Increase progress to 100% over 4000ms
        if (progressTimer >= 4000) {
          clearInterval(interval); // Stop the interval after 4000ms
        }
      }, 100);

      return () => clearInterval(interval); // Cleanup on unmount
    } else {
      setProgress(0); // Reset progress when toast is closed
    }
  }, [showErrorToast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShowErrorToast(false); // Hide toast on new submission

    try {
      const response = await axios.post(`${globalLink}auth/Login`, { email, password });
      localStorage.setItem('token', response.data.JWT_token);
      localStorage.setItem('ROLE', response.data.role);
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed');
      setShowErrorToast(true); // Show error toast on failure
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const closeToast = () => {
    setShowErrorToast(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="relative bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-40"></div>
        <div className="relative z-10">
          {!isLoggedIn ? (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-300">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-4 py-2 rounded-lg text-white ${loading ? 'bg-gray-600' : 'bg-gradient-to-r from-blue-600 to-teal-500'} transition-all duration-300 hover:opacity-90`}
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <div className="mt-4 text-center">
                <a href="/forgot-password" className="text-blue-400 underline">Forgot Password?</a>
                <br />
                <span className='text-white'>Don't have an account? </span><a href="/register" className="text-blue-400 underline">Register</a>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center text-white">You are logged in!</h2>
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Error Toast */}
      <Transition
        show={showErrorToast}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="translate-y-[-100%] opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-[100%] opacity-0"
      >
        <div
          className={`fixed bottom-4 right-4 bg-gradient-to-t from-gray-900 to-gray-800 border border-gray-700 text-white p-4 rounded-lg shadow-lg z-50 flex flex-col w-72 ${showErrorToast ? 'bounce' : ''}`}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Login Error</h3>
            <button
              onClick={closeToast}
              className="text-white text-xl font-bold hover:opacity-80 transition-opacity"
            >
              ✖️
            </button>
          </div>
          <p className="text-red-400">{error}</p>
          {/* Progress Bar */}
          <div className="relative w-full h-1 bg-gray-600 mt-2 rounded-lg overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-4000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </Transition>

      {/* CSS for Bouncing Effect */}
      <style jsx>{`
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-80px);
          }
          50% {
            transform: translateY(15px);
          }
          75% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .bounce {
          animation: bounce 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Login;
