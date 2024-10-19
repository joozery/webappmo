import React from 'react';
import './Dashboard.css';
// นำเข้าไอคอนจาก react-icons
import { FaHistory, FaEarListen, FaEye, FaLungs, FaFlask, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li><a href="#" className="active"><FaHistory className="icon" /> ประวัติ</a></li>
          <li><a href="#"><FaEarListen className="icon" /> หู</a></li>
          <li><a href="#"><FaEye className="icon" /> ตา</a></li>
          <li><a href="#"><FaLungs className="icon" /> ปอด</a></li>
          <li><a href="#"><FaFlask className="icon" /> สารเคมี</a></li>
          <li><a href="#"><FaChartBar className="icon" /> สรุป</a></li>
        </ul>
        <button className="logout-btn"><FaSignOutAlt className="icon" /> Logout</button>
      </aside>

      {/* Content */}
      <div className="content">
        <div className="header">
          <h1>Hello user 👋</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="table-container">
          <h2>All Customers</h2>
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
                <td className="status-active">Active</td>
              </tr>
              <tr>
                <td>Floyd Miles</td>
                <td>Yahoo</td>
                <td>(205) 555-0100</td>
                <td>floyd@yahoo.com</td>
                <td>Kiribati</td>
                <td className="status-inactive">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;