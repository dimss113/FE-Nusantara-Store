import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Register - Ecommerce App"}>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-sm">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your name"
              required
              autoFocus
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email"
              required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               type="password"
              value={password}
              onChange={(e) => setPassowrd(e.target.value)}
              // className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              // className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your phone number"
              required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              // className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your address"
              required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="favorite-sport"
              >
                Favorite Sport
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              // className="form-control"
              id="exampleInputEmail1"
              placeholder="what is your favorite sport"
              required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
              to="/login"
            >
              Already have an account? Sign In
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
