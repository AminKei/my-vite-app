import { useContext } from "react";
import { MyContext } from "./ExerContext";
import { Input } from "antd";

const ChildComponent = () => {
  const { setText, text } = useContext(MyContext) as any;

  return (
    <Input
      type="text"
      placeholder="Enter Your Subject"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
export default ChildComponent;
