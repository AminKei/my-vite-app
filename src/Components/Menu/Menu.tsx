import { Menu as Menu, MenuProps, Button } from "antd";
import { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Navigation Three - Submenu",
    key: "subMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: (
      <a href="#" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

const MyMenu = () => {
  const [current, setCurrent] = useState<string>("mail");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    if (isMobile) {
      setMenuVisible(false);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      {isMobile && (
        <Button
          type="primary"
          icon={<MenuOutlined />}
          onClick={toggleMenu}
          style={{ marginBottom: "16px" }}
        >
          Menu
        </Button>
      )}
      {(!isMobile || menuVisible) && (
        <Menu
          onClick={onClick}
          theme="light"
          style={{ width: isMobile ? "100%" : "300px" }}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
      )}
    </div>
  );
};

export default MyMenu;
