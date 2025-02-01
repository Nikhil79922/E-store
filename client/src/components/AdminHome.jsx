/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from "./AdminNavbar";

const AdminHome = () => {
  return (
   
    <div className="bg-gray-900 text-white min-h-screen">
      
 <AdminNavbar/>

      {/* Admin Home Page */}
      <header className="p-6 bg-slate-900 shadow-md">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </header>

      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dashboard */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
            <p className="text-gray-400">
              View the latest reports, analytics, and insights.
            </p>
            <Link
              to="/admin-dashboard"
              className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Go to Dashboard
            </Link>
          </div>

          {/* Product Management */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
            <p className="text-gray-400">
              Add, edit, or delete products in your inventory.
            </p>
            <Link
              to="/manage-products"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Manage Products
            </Link>
          </div>

          {/* Orders */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>
            <p className="text-gray-400">
              View and process customer orders.
            </p>
            <Link
              to="/manage-orders"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Orders
            </Link>
          </div>

          {/* User Profiles */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
            <p className="text-gray-400">
              View and edit user profiles, and manage user permissions.
            </p>
            <Link
              to="/manage-users"
              className="mt-4 inline-block bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
              Manage Users
            </Link>
          </div>

          {/* Analytics */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Analytics & Reports</h2>
            <p className="text-gray-400">
              Review sales reports and data analytics.
            </p>
            <Link
              to="/analytics-reports"
              className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              View Analytics
            </Link>
          </div>

          {/* Profile Settings */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <p className="text-gray-400">
              Manage your account settings and update your profile information.
            </p>
            <Link
              to="/edit-profile"
              className="mt-4 inline-block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
