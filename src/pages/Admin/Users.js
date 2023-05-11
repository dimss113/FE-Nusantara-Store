import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="bg-gray-800 text-white py-4 md:flex md:justify-between">
        <AdminMenu />
      </div>

      <div className="d-flex flex-warp justify-center m-2 p-2">
        <div className="col-md-9">
          <h1>All Users</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
