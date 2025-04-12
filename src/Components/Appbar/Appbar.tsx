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
          <Menu.Item
            key="4"
            onClick={() => (document.location = "/components")}
          >
            Components
          </Menu.Item>
          <Menu.Item
            key="5"
            onClick={() => (document.location = "/datafetching")}
          >
            Data Fetching
          </Menu.Item>
          <Menu.Item key="6" onClick={() => (document.location = "/other")}>
            Other
          </Menu.Item>
          <Menu.Item
            key="7"
            onClick={() => (document.location = "/multiformPage")}
          >
            MultiFormPage
          </Menu.Item>
          <Menu.Item
            key="8"
            onClick={() => (document.location = "/exercontext")}
          >
            ExerContext
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
