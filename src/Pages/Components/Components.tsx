import { Card } from "antd";
import { useRef } from "react";
import AppButton from "../../Components/BaseComponents/Button/AppButton";
import Textarea from "../../Components/BaseComponents/Textarea/Textarea";
import MarkWorder from "../../Components/MarkWorder/MarkWorder";

const Components = () => {

  const buttonRef = useRef<any>(null);

  return (
    <Card style={{ width: "80vw" }}>
      <Textarea />
      <AppButton ref={buttonRef} onYaroClicked={() => {
        buttonRef.current.childMethod();
      }} />
      <MarkWorder/>
    </Card>
  );
};

export default Components;
