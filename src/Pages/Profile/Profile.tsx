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
            {/* Example placeholder for recent activities */}
            <p>User A logged in</p>
            <p>User B completed their profile</p>
            <p>User C made a purchase</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Statistics Overview">
            {/* Example placeholder for statistics overview */}
            <p>Weekly Active Users: 3000</p>
            <p>Monthly Active Users: 10000</p>
            <p>Revenue This Month: $5000</p>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
