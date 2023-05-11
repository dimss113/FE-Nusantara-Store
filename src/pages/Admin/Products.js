import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="bg-gray-800 text-white py-4 md:flex md:justify-between">
        <AdminMenu />
      </div>
      <div className="d-flex flex-wrap justify-center m-2 p-2">
        <div className="d-flex flex-warp justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={`/api/v1/product/product-photo/${product._id}`}
                  alt={product.name}
                />
                <div className="p-4">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-700 text-base">
                    {product.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      to={`/dashboard/admin/product/${product.slug}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Products;
