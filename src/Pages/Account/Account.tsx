import { Card, Typography } from "antd";
const Account = () => {
  return (
    <Card>
      <Typography onClick={() => (document.location = "/account/setting")}>
        Setting
      </Typography>
    </Card>
  );
};

export default Account;
