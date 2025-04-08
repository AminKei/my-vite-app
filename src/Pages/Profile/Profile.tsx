import { Row, Col, Card, Typography, Statistic } from "antd";
import { Fragment } from "react/jsx-runtime";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <Fragment>
      <Title level={2}>Dashboard</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Users" value={112893} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Active Sessions" value={3567} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="New Sign-ups" value={1230} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="Recent Activity">
            <Typography>User A logged in</Typography>
            <Typography>User B completed their profile</Typography>
            <Typography>User C made a purchase</Typography>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Statistics Overview">
            <Typography>Weekly Active Users: 3000</Typography>
            <Typography>Monthly Active Users: 10000</Typography>
            <Typography>Revenue This Month: $5000</Typography>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
