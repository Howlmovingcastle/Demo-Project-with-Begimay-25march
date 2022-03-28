import { Col } from "antd";
import React from "react";
import AddProduct from "../components/AddProduct/AddProduct";
import AdminProducts from "../components/AdminProducts/AdminProducts";

const AdminPage = () => {
  return (
    <div>
      <Col span={23}>
        <AddProduct />
        <AdminProducts />
      </Col>
    </div>
  );
};

export default AdminPage;
