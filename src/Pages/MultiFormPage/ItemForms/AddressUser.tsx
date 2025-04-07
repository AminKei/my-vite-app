import { Card, Input, Button, Space, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useFormContext } from "../FormContext";

const { TextArea } = Input;
const { Title } = Typography;

const AddressUser: React.FC<{ onBack: () => void; onNext: () => void }> = ({
  onBack,
  onNext,
}) => {
  const { formData, setFormData } = useFormContext();
  const [address, setAddress] = useState(formData.address);
  const [place, setPlace] = useState<number | null>(formData.place);
  const [postalCode, setPostalCode] = useState<number | null>(
    formData.postalCode
  );

  useEffect(() => {
    setAddress(formData.address);
    setPlace(formData.place);
    setPostalCode(formData.postalCode);
  }, [formData.address, formData.place, formData.postalCode]);

  const validate = () => {
    const errors = [];
    if (!address) errors.push("Address is required.");
    if (place === null) errors.push("Place is required.");
    if (postalCode === null) errors.push("Postal code is required.");
    return errors.length === 0 ? null : errors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (validationErrors) {
      alert(validationErrors.join("\n"));
    } else {
      setFormData({ ...formData, address, place, postalCode });
      onNext();
    }
  };

  return (
    <Card title="Your Address">
      <Title level={2}>Step 2</Title>
      <Space direction="vertical" style={{ width: "100%" }}>
        <TextArea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={4}
        />
        <Input
          type="number"
          placeholder="Place"
          value={place ?? ""}
          onChange={(e) => setPlace(Number(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Postal Code"
          value={postalCode ?? ""}
          onChange={(e) => setPostalCode(Number(e.target.value))}
        />
        <Space>
          <Button onClick={onBack}>Back</Button>
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

export default AddressUser;
