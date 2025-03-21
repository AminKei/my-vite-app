import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import "Appbar.module.css";

const Appbar = () => {
  return (
    <Layout>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          lineHeight: "64px",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          onClick={() => (document.location = "/")}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UserOutlined />}
          onClick={() => (document.location = "/about")}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<SettingOutlined />}
          onClick={() => (document.location = "/contactus")}
        >
          ContactUs
        </Menu.Item>
      </Menu>
    </Layout>
  );
};

export default Appbar;
