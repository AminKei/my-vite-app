import { Layout, Menu } from 'antd';  
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';  

const { Footer } = Layout;  

const Navigation = () => {  
    return (  
        <Layout >  
            <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>  
                <Menu mode="horizontal">  
                    <Menu.Item key="home" icon={<HomeOutlined />}>  
                        Home  
                    </Menu.Item>  
                    <Menu.Item key="profile" icon={<UserOutlined />}>  
                        Profile  
                    </Menu.Item>  
                    <Menu.Item key="settings" icon={<SettingOutlined />}>  
                        Settings  
                    </Menu.Item>  
                </Menu>  
            </Footer>  
        </Layout>  
    );  
}  

export default Navigation;  