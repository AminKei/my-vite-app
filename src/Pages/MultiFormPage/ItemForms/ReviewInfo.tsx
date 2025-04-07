import { Button, Card, Space } from "antd";
import { useFormContext } from "../FormContext";

const ReviewInfo: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { formData } = useFormContext();

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <Card title="Review Your Information">
      <h4>Email:</h4> <p>{formData.email}</p>
      <h4>Password:</h4> <p>{formData.password}</p>
      <h4>Address:</h4> <p>{formData.address}</p>
      <h4>Place:</h4> <p>{formData.place}</p>
      <h4>Postal Code:</h4> <p>{formData.postalCode}</p>
      <h4>Send Time:</h4> <p>{formData.sendTime}</p>
      <Space>
        <Button onClick={onBack}>Back</Button>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Space>
    </Card>
  );
};

export default ReviewInfo;
