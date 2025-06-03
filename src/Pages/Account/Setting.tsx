import {
  Card,
  Typography,
  Form,
  Input,
  Button,
  Switch,
  Divider,
  Space,
  Select,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Setting = () => {
  return (
    <Card title="Account Settings" style={{ width: "100%" }}>
      <Form
        layout="vertical"
        initialValues={{
          notifications: true,
          language: "english",
        }}
      >
        <Typography.Title level={4}>Profile Information</Typography.Title>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Divider />

        <Typography.Title level={4}>Security</Typography.Title>
        <Form.Item name="currentPassword" label="Current Password">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Current Password"
          />
        </Form.Item>

        <Form.Item name="newPassword" label="New Password">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="New Password"
          />
        </Form.Item>

        <Divider />

        <Typography.Title level={4}>Preferences</Typography.Title>
        <Form.Item name="notifications" label="Email Notifications">
          <Switch />
        </Form.Item>

        <Form.Item name="language" label="Language">
          <Select>
            <Select.Option value="english">English</Select.Option>
            <Select.Option value="spanish">Spanish</Select.Option>
            <Select.Option value="french">French</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
            <Button>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Setting;
