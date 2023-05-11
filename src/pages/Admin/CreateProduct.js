import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

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
      toast.error(`Error in getAllCategory ${error}`);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      // productData.append("shipping", shipping);
      const { data } = axios.post(
        `/api/v1/product/create-product`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="bg-gray-800 text-white py-4 md:flex md:justify-between">
        <AdminMenu />
      </div>

      <div className="d-flex flex-warp justify-center m-2 p-2">
        <div className="container mx-auto">
          <form onSubmit={handleCreate} encType="multipart/form-data">
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
                  className="form-select mb-3"
                  placeholder="Select a category"
                  size="large"
                  showSearch
                  // className="form-select mb-3"
                  onChange={(value) => {
                    setCategory(value);
                  }}
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
                {photo && (
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                    className="w-full h-auto mb-2"
                  />
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
              Add Product
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default CreateProduct;
