import { Form, Input, Button, Typography, Card } from "antd";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Card size="small" title="Contact Us">
      <Typography>
        Call us: <Link to="tel:09123456789">09123456789</Link>
      </Typography>
      <Form name="contact" className="contact-form" layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ContactUs;
