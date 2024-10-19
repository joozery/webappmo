import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li className="active">ประวัติ</li>
            <li>หู</li>
            <li>ตา</li>
            <li>ปอด</li>
            <li>สารเคมี</li>
            <li>สรุป</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="pro-btn">Upgrade to Pro</button>
          <div className="profile">
            <span>Evano</span>
            <small>Project Manager</small>
          </div>
        </div>
      </aside>
      
      <main className="main-content">
        <header className="dashboard-header">
          <h2>Hello user 👋</h2>
          <input type="text" placeholder="Search..." className="search-input" />
        </header>
        
        <section className="customers-section">
          <h3>All Customers</h3>
          <span>Active Members</span>
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
              <tr>
                <td>Jane Cooper</td>
                <td>Microsoft</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>United States</td>
                <td><span className="status active">Active</span></td>
              </tr>
              <tr>
                <td>Floyd Miles</td>
                <td>Yahoo</td>
                <td>(205) 555-0100</td>
                <td>floyd@yahoo.com</td>
                <td>Kiribati</td>
                <td><span className="status inactive">Inactive</span></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;