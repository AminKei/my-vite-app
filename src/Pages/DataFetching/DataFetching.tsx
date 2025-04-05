import { useState } from "react";
import { Button, Card, List, Typography } from "antd";
import { fetchPosts } from "../../Hooks/useProducts";
import { ProductItems } from "../../Models/Items";

const DataFetching = () => {
  const [data, setData] = useState<ProductItems[]>([]);
  const [error, setError] = useState("");

  //  const loadPosts = () => {
  //     fetchPosts().then((r)=>{
  //       console.log("rrrrrrrrrrr:1",  r)
  //       setData(r)
  //     })
  //     .catch(e =>{
  //       console.log("rrrrrrrrrrr:2",  e)
  //     })ge
  //  }

  const loadPosts = async () => {
    const r = await fetchPosts();
    if (r.length === 0) {
      setError("No posts found");
    }
    if (r.length > 0) {
      setError("");
    }
    setData(r);
  };

  const { Text, Title } = Typography;

  if (error) return <Text type="warning">Error fetching posts: {error}</Text>;

  return (
    <Card
      title={<Title level={4}>Posts without React Query</Title>}
      extra={
        <Button type="primary" onClick={loadPosts}>
          Refresh Data
        </Button>
      }
      style={{ height: "100vh", width: "100%", margin: 0 }}
      bodyStyle={{ height: "calc(100vh - 110px)", overflow: "auto" }}
    >
      <List
        itemLayout="vertical"
        dataSource={data} // Use the fetched data from state
        renderItem={(post) => (
          <List.Item key={post.id}>
            <Text type="success">Post ID: {post.id}</Text>
            <List.Item.Meta
              title={<Text strong>{post.title}</Text>}
              description={<Text type="secondary">{post.body}</Text>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default DataFetching;
