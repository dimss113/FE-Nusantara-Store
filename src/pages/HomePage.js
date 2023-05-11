import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Checkbox, Radio, Button } from "antd";
import { Prices } from "../components/Prices";
import "../styles/Homepage.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(`Error in getAllCategory ${error}`);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(`Error in getAllProducts ${error}`);
    }
  };

  // get total products
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-count`
      );
      if (data?.success) {
        setTotal(data?.total);
      }
    } catch (error) {
      console.log(`Error in getTotal ${error}`);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(`Error in loadMore ${error}`);
      setLoading(false);
    }
  };

  // filter by cate
  const handleFilter = async (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // get filtered product
  const filterProduct = async (arg) => {
    try {
      const { data } = await axios.post(
        `/api/v1/product/product-filters`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(`Error in filterProduct ${error}`);
    }
  };

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-bold mb-2">Filter by Category</h3>
          {categories?.map((c) => (
            <Checkbox
              key={c._id}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
            >
              {c.name}
            </Checkbox>
          ))}
        </div>

        <h3 className="font-bold mb-2">Filter by Prices</h3>
        <div className="bg-white shadow rounded p-4">
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <Radio key={p._id} value={p.array}>
                {p.name}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => window.location.reload()}
            class="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Reset Filters
          </button>
        </div>
        <h1 className="text-center">All Products</h1>
        <div className="d-flex flex-wrap justify-center">
          {products?.map((p) => (
            <>
              <div className="border rounded-lg shadow-md overflow-hidden">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{p.name}</h3>
                  <p className="text-gray-500 mb-2">
                    {p.description.substring(0, 30)}
                  </p>
                  <p className="text-gray-800 font-medium mb-2">${p.price}</p>
                  <div className="flex justify-between">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("item added to cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="d-flex flex-wrap justify-center">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}
          class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </Layout>
  );
};

export default HomePage;
