import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const customers = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0167",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Active",
    },
    // เพิ่มลูกค้าอื่น ๆ ตามต้องการ
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>เมนู</h2>
        <ul>
          <li><a href="#">ประวัติ</a></li>
          <li><a href="#">หู</a></li>
          <li><a href="#">ตา</a></li>
          <li><a href="#">ปอด</a></li>
          <li><a href="#">สารเคมี</a></li>
          <li><a href="#">สรุป</a></li>
        </ul>
      </aside>
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Hello user 👋</h1>
        </header>
        <section className="customer-list">
          <h2>All Customers</h2>
          <p>Active Members</p>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.company}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.country}</td>
                  <td className={`status ${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;