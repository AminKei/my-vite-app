import { Card, Checkbox, DatePicker, Button, Space } from "antd";
import React, { useState } from "react";
import { useFormContext } from "../FormContext";

const SendTime: React.FC<{ onBack: () => void; onNext: () => void }> = ({
  onBack,
  onNext,
}) => {
  const { formData, setFormData } = useFormContext();
  const [sendTime, setSendTime] = useState<string>(formData.sendTime);

  const handleNext = () => {
    setFormData({ ...formData, sendTime });
    onNext();
  };

  return (
    <Card title="Set Send Time">
      <Space direction="vertical" style={{ width: "100%" }}>
        <Checkbox>Pishtaz: 50,000</Checkbox>
        <Checkbox>Tibax: 40,000</Checkbox>
        <div>
          <span>Send Time: </span>
          <DatePicker
            onChange={(_, dateString) => setSendTime(dateString as string)}
          />
        </div>
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

export default SendTime;
