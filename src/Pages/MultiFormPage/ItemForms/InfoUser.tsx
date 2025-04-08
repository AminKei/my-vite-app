import { Card, Input, Button } from "antd";
import React from "react";
import { useFormContext } from "../FormContext";

const InfoUser: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { formData, setFormData } = useFormContext();
  const [email, setEmail] = React.useState(formData.email);
  const [password, setPassword] = React.useState(formData.password);

  const validate = () => {
    const errors = [];
    if (!email) errors.push("Email is required.");
    if (!password) errors.push("Password is required.");
    return errors.length === 0 ? null : errors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (validationErrors) {
      alert(validationErrors.join("\n"));
    } else {
      setFormData({ ...formData, email, password });
      onNext();
    }
  };

  return (
    <Card title="Info">
      <Card
        title="Step 1: Your Information"
        bordered={false}
        style={{ boxShadow: "none", margin: "16px" }}
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Card bordered={false} style={{ boxShadow: "none" }}>
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        </Card>
      </Card>
    </Card>
  );
};

export default InfoUser;
