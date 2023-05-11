import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../styles/ProductDetailsStyles.css";
import { useCart } from "../context/cart";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {/* <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button class="btn btn-secondary ms-1" onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("item added to cart");
                      }}>ADD TO CART</button>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 my-4 md:my-8">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-4 md:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-gray-500 mb-4">
            Description: {product.description}
          </p>
          <p className="text-gray-800 font-medium text-xl mb-4">
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="text-gray-500 font-medium mb-2">
            Category: {product?.category?.name}
          </p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              toast.success("item added to cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>



      {/* <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
   
          {relatedProducts.map((p) => (
            <div
              className="border rounded-lg shadow-md overflow-hidden"
              key={p._id}
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{p.name}</h3>
                <p className="text-gray-500 mb-2"> {p.description.substring(0, 60)}...</p>
                <p className="text-gray-800 font-medium mb-2">
                               {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"  onClick={() => navigate(`/product/${p.slug}`)}>
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
