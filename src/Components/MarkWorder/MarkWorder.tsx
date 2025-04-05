import { Card, Input, Typography } from "antd";
import { useState } from "react";

let text = "ما در  خانه ما هستیم اینجا خانه تمیزی است و ما خوشحالیم که این حانه را داریم";

const MarkWorder = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [content, setContent] = useState<string>(text);

  const searchFn = (value: string): void => {
    const regex = new RegExp(`(${value})`, "gi");
    const highlightedContent = content.replace(regex, "<mark>$1</mark>");
    setContent(highlightedContent);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    searchFn(value);
  };

  return (
    <Card title="Mark Worder">
      <Input
        onChange={handleChange}
        value={searchTerm}
        id="search-input"
        placeholder="Search..."
      />
      <Typography dangerouslySetInnerHTML={{ __html: content }}></Typography>
    </Card>
  );
};

export default MarkWorder;
