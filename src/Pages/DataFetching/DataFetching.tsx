import { Button, Card, List, Spin, Typography } from "antd";
import { usePosts } from "../../Queries/getProducts";

const DataFetching = () => {
  const { data, error, isLoading, refetch } = usePosts();

  const { Text, Title } = Typography;

  if (isLoading) return <Spin size="large" />;
  if (error)
    return <Text type="warning">Error fetching posts: {error.message}</Text>;

  return (
    <Card
      title={<Title level={4}>Posts with React Query async & await</Title>}
      extra={
        <Button type="primary" onClick={() => refetch()}>
          Refresh Data
        </Button>
      }
      style={{ height: "100vh", width: "100%", margin: 0 }}
      bodyStyle={{ height: "calc(100vh - 110px)", overflow: "auto" }}
    >
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={(post: any) => (
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
