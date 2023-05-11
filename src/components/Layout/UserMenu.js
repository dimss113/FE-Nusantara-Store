import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const UserMenu = () => {
  const [auth] = useAuth();
  return (
    <>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">User Dashboard</h1>
        </div>
        <div>
          <span className="text-gray-600 font-bold">{auth?.user?.name}</span>
          <span className="text-gray-600 mx-4">{auth?.user?.email}</span>
          <span className="text-gray-600">{auth?.user?.address}</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <Link
            to="/dashboard/user/profile"
            className="text-gray-600 font-bold hover:text-gray-800 mx-2"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/user/orders"
            className="text-gray-600 font-bold hover:text-gray-800 mx-2"
          >
            Orders
          </Link>
        </div>
        <div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
