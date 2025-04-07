import { Card, Steps } from "antd";
import { useState } from "react";
import InfoUser from "./ItemForms/InfoUser";
import AddressUser from "./ItemForms/AddressUser";
import SendTime from "./ItemForms/SendTime";
import ReviewInfo from "./ItemForms/ReviewInfo";
import { FormProvider } from "./FormContext"; 

const MultiFormPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const items = [
    {
      title: "Step 1",
      description: "User Info",
    },
    {
      title: "Step 2",
      description: "Address",
    },
    {
      title: "Step 3",
      description: "SendTime",
    },
    {
      title: "Step Finaly",
      description: "Review Info",
    },
  ];

  const steps = [
    <InfoUser onNext={() => setCurrentStep(currentStep + 1)} />,
    <AddressUser
      onNext={() => setCurrentStep(currentStep + 1)}
      onBack={() => setCurrentStep(currentStep - 1)}
    />,
    <SendTime
      onNext={() => setCurrentStep(currentStep + 1)}
      onBack={() => setCurrentStep(currentStep - 1)}
    />,
    <ReviewInfo onBack={() => setCurrentStep(currentStep - 1)} />,
  ];

  return (
    <FormProvider>
      <Card title="Multi-Step Form" style={{ width: "100%" }}>
        <Steps
          current={currentStep}
          items={items}
          style={{ marginBottom: "24px", fontSize: "12px" }}
        />
        <div>{steps[currentStep]}</div>
      </Card>
    </FormProvider>
  );
};

export default MultiFormPage;
