import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassowrd] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password, phone, address });
    // toast.success('register success');
    try {
      const res = await axios.post(
        `/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        // used when we reload page we still in login
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
    <Layout title={"forgot password - ecommerce app"}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white rounded-lg px-4 py-6"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
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
              htmlFor="favoriteSport"
              className="block text-gray-700 font-bold mb-2"
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
              placeholder="Enter your favorite sport"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               type="password"
              value={newPassword}
              onChange={(e) => setNewPassowrd(e.target.value)}
              // className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
