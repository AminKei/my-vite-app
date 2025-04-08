import { Form, Input, Button } from "antd";
import useSignUp from "./useSignUp";

const SignUpForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useSignUp();

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Username"
        validateStatus={touched.username && errors.username ? "error" : ""}
        help={touched.username && errors.username ? errors.username : ""}
      >
        <Input
          name="username"
          onChange={handleChange}
          value={values.username}
        />
      </Form.Item>
      <Form.Item
        label="Email"
        validateStatus={touched.email && errors.email ? "error" : ""}
        help={touched.email && errors.email ? errors.email : ""}
      >
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        validateStatus={touched.password && errors.password ? "error" : ""}
        help={touched.password && errors.password ? errors.password : ""}
      >
        <Input.Password
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
