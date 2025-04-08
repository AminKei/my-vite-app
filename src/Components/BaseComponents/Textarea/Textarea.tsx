"use-strict";
import { Card, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useCount } from "./useCount";

const { Text } = Typography;

const Textarea = () => {
  const { onChange, text, count, error } = useCount();

  return (
    <Card>
      <Typography>Textarea:</Typography>
      <TextArea
        placeholder="Bio"
        value={text}
        autoFocus
        onChange={onChange}
      />
      <Typography>{count} characters</Typography>
      {error && <Text  type="danger">{error}</Text>}
    </Card>
  );
};

export default Textarea;
