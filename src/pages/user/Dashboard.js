import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="bg-gray-200 shadow-lg">
        <UserMenu />
      </div>
    </Layout>
  );
};

export default Dashboard;
