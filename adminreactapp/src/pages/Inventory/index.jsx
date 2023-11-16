import React, { useEffect, useState } from "react";
import "./style.css";
import { Space, Table, Typography, Avatar, Rate } from "antd";
import { getInventory } from "../../API/index";

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDateSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDateSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Inventory;
