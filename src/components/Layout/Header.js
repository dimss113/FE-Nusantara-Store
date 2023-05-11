import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="font-bold text-2xl">Nusantara Store</h1>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <div className="relative">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                    Categories
                    <svg
                      className="h-5 w-5 inline-block ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none"
                    >
                      {categories?.map((category) => (
                        <Menu.Item key={category._id}>
                          {({ active }) => (
                            <Link
                              to={`/category/${category.slug}`}
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5`}
                            >
                              {category.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
          <div className="relative">
            <form>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="flex items-center">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search products"
                  className="border border-gray-200 rounded-l-md px-3 py-2 mr-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  <SearchIcon className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>
          </div>
          <Link to="/cart" className="text-gray-600 hover:text-gray-800">
            <NavLink to="/cart">
              <Badge count={cart?.length} showZero offset={[10, -5]}>
                Cart
              </Badge>
            </NavLink>
          </Link>

          <div className="relative">
            <Menu>
              {({ open }) => (
                <>
                  {!auth?.user ? (
                    <>
                      <Link
                        to="/register"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Register
                      </Link>
                      <span className="mx-2">|</span>
                      <Link
                        to="/login"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Login
                      </Link>
                    </>
                  ) : (
                    <>
                      <Menu.Button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                        <Link>{auth?.user?.name}</Link>
                        <svg
                          className="h-5 w-5 inline-block ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Menu.Button>
                      <Transition
                        show={open}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="absolute right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={`/dashboard/${
                                  auth?.user?.role === 1 ? "admin" : "user"
                                }`}
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5`}
                              >
                                Dashboard
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                onClick={handleLogout}
                                to={`/login`}
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5`}
                              >
                                Logout
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </>
              )}
            </Menu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
