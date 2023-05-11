import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategrories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/api/v1/category/create-category`,
        { name }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        setName("");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(`Error in handleSubmit ${error}`);
      toast.error(`Error in handleSubmit ${error}`);
    }
  };

  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategrories(data?.category);
      }
    } catch (error) {
      console.log(`Error in getAllCategory ${error}`);
      toast.error(`Error in getAllCategory ${error}`);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setVisible(false);
        setSelected(null);
        setUpdatedName("");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(`Error in handleUpdate ${error}`.bgRed.white);
      toast.error(`Error in handleUpdate ${error}`);
    }
  };

  // handle delete
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`Category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(`Error in handleUpdate ${error}`.bgRed.white);
      toast.error(`Error in handleUpdate ${error}`);
    }
  };

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="bg-gray-800 text-white py-4 md:flex md:justify-between">
        <AdminMenu />
      </div>

      <div className="d-flex flex-warp justify-center m-2 p-2">
        <div className="container mx-auto">
          <div className="flex justify-center my-4">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter category name"
                className="border-2 border-gray-400 rounded-l-lg px-4 py-2 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category._id}
                className="bg-white rounded-lg shadow-lg p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-medium">{category.name}</div>
                  <div>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white rounded px-2 py-1 mr-2"
                      onClick={() => {
                        setVisible(true);
                        setUpdatedName(category.name);
                        setSelected(category);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white rounded px-2 py-1"
                      onClick={() => {
                        handleDelete(category._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
            className="bg-red-500 hover:bg-red-700 text-white rounded px-2 py-1"
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal>
      </div>
    </Layout>
  );
};

export default CreateCategory;
