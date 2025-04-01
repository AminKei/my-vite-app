import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { Card, Spin, Alert, Typography } from "antd";
import { ProductItems } from "../../Models/Items";

const { Text } = Typography;

const Other = () => {
  const [data, setdata] = useState<ProductItems[]>([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await axiosInstance.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setdata(response.data);
      } catch (err) {
        setErrorMessage("Failed to fetch data");
        seterror(true);
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return (
      <Card>
        <Alert
          message="Error"
          description="Failed to fetch data"
          type="error"
        />
        <Text>{errorMessage}</Text>
      </Card>
    );
  }

  return (
    <Card>
      {data.map((item) => (
        <Card key={item.id} style={{ marginBottom: 16 }}>
          <Card.Meta title={item.title} description={item.body} />
        </Card>
      ))}
    </Card>
  );
};

export default Other;
