import React from 'react';
import { Layout, Menu, Table, Input, Button } from 'antd';
import { UserOutlined, BellOutlined, EyeOutlined, LockOutlined, FileOutlined, TableOutlined, LogoutOutlined } from '@ant-design/icons';
import './Dashboard.css';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const Dashboard = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Jane Cooper',
      company: 'Microsoft',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'Active',
    },
    {
      key: '2',
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive',
    },
    // เพิ่มข้อมูลอื่นๆ
  ];

  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span style={{ color: status === 'Active' ? 'green' : 'red' }}>{status}</span>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} className="site-layout-background">
        <div className="logo">Dashboard</div>
        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            ประวัติ
          </Menu.Item>
          <Menu.Item key="2" icon={<BellOutlined />}>
            หู
          </Menu.Item>
          <Menu.Item key="3" icon={<EyeOutlined />}>
            ตา
          </Menu.Item>
          <Menu.Item key="4" icon={<LockOutlined />}>
            ปอด
          </Menu.Item>
          <Menu.Item key="5" icon={<FileOutlined />}>
            สารเคมี
          </Menu.Item>
          <Menu.Item key="6" icon={<TableOutlined />}>
            สรุป
          </Menu.Item>
          <Button icon={<LogoutOutlined />} className="logout-button" type="primary" block>
            Logout
          </Button>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
          <Search placeholder="Search..." style={{ width: 200, margin: '16px' }} />
        </Header>
        <Content style={{ margin: '16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <h1>Hello user 👋</h1>
            <h3>All Customers</h3>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 8 }} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;