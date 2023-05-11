import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="bg-gray-800 text-white py-4 md:flex md:justify-between">
        <AdminMenu />
      </div>

    </Layout>
  );
};

export default AdminDashboard;
