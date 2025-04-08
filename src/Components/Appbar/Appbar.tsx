import { Avatar, Button, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Appbar.module.css";

const Appbar = () => {
  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item>
          <Menu.Item key="1" onClick={() => (document.location = "/")}>
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={() => (document.location = "/about")}>
            About
          </Menu.Item>
          <Menu.Item key="3" onClick={() => (document.location = "/contactus")}>
            ContactUs
          </Menu.Item>
          <Menu.Item key="3" onClick={() => (document.location = "/components")}>
            Components
          </Menu.Item>
        </Menu.Item>
        <Menu.Item onClick={() => (document.location = "/profile")}>
          <Avatar
            style={{ backgroundColor: "#0073d1" }}
            icon={<UserOutlined />}
          />
        </Menu.Item>
        <Button onClick={() => (document.location = "./signup")}>SignUp</Button>
      </Menu>
    </>
  );
};

export default Appbar;
