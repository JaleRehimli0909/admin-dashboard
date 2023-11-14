import React from "react";
import "./style.css";
import { Badge, Image, Space, Typography } from "antd";
import { MailOutlined, BellOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.jpg";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Image width={40} src={logo}></Image>
      <Typography.Title>Jale's Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellOutlined style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
