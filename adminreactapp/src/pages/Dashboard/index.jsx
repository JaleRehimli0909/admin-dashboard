import {
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Statistic, Typography, Space, Card } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Orders"
          value="12345"
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Inventory"
          value="12345"
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Customer"
          value="12345"
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Revenue"
          value="12345"
        />
      </Space>
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

export default Dashboard;
