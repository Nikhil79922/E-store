/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Get the location object from React Router

  // Redux
  const globalLink = useSelector((state) => state.link);

  // Extract the token from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setMessage(''); // Clear message if error appears
      return;
    }
    setLoading(true);
    setError('');
    setMessage('');

    try {
      await axios.post(`${globalLink}auth/reset-password?token=${token}`, { password });
      setMessage('Password has been successfully reset.');
      setError(''); // Clear error if success message appears
    } catch (error) {
      const errorMessage = error.response?.data?.error;

      if (errorMessage === 'TokenExpiredError') {
        setError('Reset link has expired. Please request a new password reset link.');
      } else {
        setError(error.response?.data?.message || 'Password reset failed');
      }
      setMessage(''); // Clear success message if error appears
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Reset Password</h2>
        {message && <p className="text-green-400 mb-4">{message}</p>}
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl focus:outline-none ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Resetting...
              </span>
            ) : (
              'Reset Password'
            )}
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-400 hover:underline">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
