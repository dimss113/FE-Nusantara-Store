import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineDatabase,
  AiOutlineUserAdd,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FaList } from "react-icons/fa";

const AdminMenu = () => {
  const [auth] = useAuth();

  return (
    <>
      <div className="md:flex md:justify-start">
        <div className="text-center md:text-left md:ml-4">
          <Link to="/dashboard/admin">
            <h1 className="text-xl font-bold uppercase">Admin Dashboard</h1>
          </Link>
        </div>
        <div className="md:ml-10 md:flex md:items-baseline">
          <Link
            to="/dashboard/admin/create-category"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6 text-white hover:text-gray-400"
          >
            <div className="flex items-center">
              <AiOutlinePlusCircle size={24} />
              <span className="ml-2">Create Category</span>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/create-product"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6 text-white hover:text-gray-400"
          >
            <div className="flex items-center">
              <AiOutlinePlusCircle size={24} />
              <span className="ml-2">Create Product</span>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/products"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6 text-white hover:text-gray-400"
          >
            <div className="flex items-center">
              <FaList size={24} />
              <span className="ml-2">Products</span>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/orders"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6 text-white hover:text-gray-400"
          >
            <div className="flex items-center">
              <AiOutlineShoppingCart size={24} />
              <span className="ml-2">Orders</span>
            </div>
          </Link>
          <Link
            to="/dashboard/admin/users"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6 text-white hover:text-gray-400"
          >
            <div className="flex items-center">
              <AiOutlineUser size={24} />
              <span className="ml-2">Users</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:flex md:flex-col md:items-end md:justify-center md:text-right md:mr-4">
          <span className="text-sm">{auth?.user?.name}</span>
          <span className="text-sm">{auth?.user?.email}</span>
          <span className="text-sm">{auth?.user?.phone}</span>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
