import { Card } from "antd";
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export const MyContext = React.createContext(null);
const ExerContext = () => {
  const [text, setText] = useState("");
  return (
    <MyContext.Provider value={{ text, setText } as any}>
      <Card style={{ width: "100%" }} title={`Subject:${text}`}>
        <ChildComponent />
      </Card>
    </MyContext.Provider>
  );
};
export default ExerContext;
