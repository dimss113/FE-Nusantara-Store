import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.put(
        `/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/product/delete-product/${id}`
      );
      toast.success("Product Delet3ed Succfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="bg-gray-800 text-white py-4 md:flex md:justify-between">
        <AdminMenu />
      </div>
      <div className="d-flex flex-wrap justify-center m-2 p-2">
        <div className="container mx-auto">
          <form onSubmit={handleUpdate} encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="category"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Category
                </label>
                <Select
                  bordered={false}
                  placeholder="Select a category"
                  className="form-select mb-3"
                  size="large"
                  showSearch
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Photo
                </label>
                <div className="flex items-center mb-2">
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                  <label
                    htmlFor="photo"
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 cursor-pointer"
                  >
                    {photo ? photo.name : "Upload Photo"}
                  </label>
                </div>
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`/api/v1/product/product-photo/${id}`}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="text"
                value={name}
                placeholder="write a name"
                // className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                rows={3}
                type="text"
                value={description}
                placeholder="write a description"
                // className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="price"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Price
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    className="w-full px-4 py-2 pl-10 pr-4 rounded border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    min="0"
                    step="0.01"
                    type="number"
                    value={price}
                    placeholder="write a Price"
                    // className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  min="0"
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  // className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="shipping"
                className="block font-medium text-gray-700 mb-2"
              >
                Shipping
              </label>
              <div className="flex items-center">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Update Product
            </button>
          </form>
          <div className="mt-2 pt-2">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
