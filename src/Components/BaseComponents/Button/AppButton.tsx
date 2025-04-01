import { Button, Card, Typography } from "antd";
import { forwardRef, useImperativeHandle } from "react";

interface AppButtonProps {
  onYaroClicked?: () => void;
}

const AppButton = forwardRef<any, AppButtonProps>(({ onYaroClicked }, ref) => {
  function childMethod() {
    alert("Child event!");
  }

  useImperativeHandle(ref, () => ({
    childMethod,
  }));

  return (
    <Card>
      <Typography>ForwardRef :</Typography>
      <Button ref={ref} type="primary" onClick={onYaroClicked}>
        Primary Button
      </Button>
    </Card>
  );
});
export default AppButton;
