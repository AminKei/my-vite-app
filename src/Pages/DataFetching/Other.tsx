import { Card, Alert, Typography } from "antd";
import { ProductItems } from "../../Models/Items";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../Hooks/useProducts";

const { Text } = Typography;

const Other = () => {
  const [data, setData] = useState<ProductItems[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchPosts();
        setData(response);
      } catch (err) {
        setError(true);
        setErrorMessage(
          err instanceof Error ? err.message : "An error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
    <Card loading={loading}>
      {data.map((item) => (
        <Card key={item.id} style={{ marginBottom: 16 }}>
          <Card.Meta title={item.title} description={item.body} />
        </Card>
      ))}
    </Card>
  );
};

export default Other;
