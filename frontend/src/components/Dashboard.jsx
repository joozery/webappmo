import React from 'react';
import { Layout, Menu, Table, Input, Button } from 'antd';
import { UserOutlined, FileOutlined, HistoryOutlined, EyeOutlined, 
    SoundOutlined, DatabaseOutlined, DashboardOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import './Dashboard.css';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const Dashboard = () => {
  const columns = [
    { title: 'Customer Name', dataIndex: 'name', key: 'name' },
    { title: 'Company', dataIndex: 'company', key: 'company' },
    { title: 'Phone Number', dataIndex: 'phone', key: 'phone' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => (
      <span className={status === 'Active' ? 'status-active' : 'status-inactive'}>
        {status}
      </span>
    ) },
  ];

  const data = [
    { key: '1', name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { key: '2', name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
    // เพิ่มข้อมูลอื่นๆ ที่ต้องการ
  ];

  return (
    <Layout>
      <Sider width={200} className="ant-layout-sider">
        <div className="logo">Dashboard</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HistoryOutlined />}>ประวัติ</Menu.Item>
          <Menu.Item key="2" icon={<SoundOutlined />}>หู</Menu.Item>
          <Menu.Item key="3" icon={<EyeOutlined />}>ตา</Menu.Item>
          <Menu.Item key="4" icon={<MedicineBoxOutlined />}>ปอด</Menu.Item>
          <Menu.Item key="5" icon={<DatabaseOutlined />}>สารเคมี</Menu.Item>
          <Menu.Item key="6" icon={<DashboardOutlined />}>สรุป</Menu.Item>
        </Menu>
        <Button type="primary" className="upgrade-btn">Upgrade to Pro</Button>
        <div className="user-info">
          <p>Evano</p>
          <p>Project Manager</p>
        </div>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <h1>Hello user 👋</h1>
            <Search placeholder="Search..." style={{ width: 200 }} />
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <h2>All Customers</h2>
          <p>Active Members</p>
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;