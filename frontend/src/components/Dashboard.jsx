import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h3>Today's Sales</h3>
          <p>$53,000</p>
          <p className="percentage">-30%</p>
        </div>
        <div className="card">
          <h3>Today's Users</h3>
          <p>3,200</p>
          <p className="percentage">-20%</p>
        </div>
        <div className="card">
          <h3>New Clients</h3>
          <p>+1,200</p>
          <p className="percentage">-20%</p>
        </div>
        <div className="card">
          <h3>New Orders</h3>
          <p>$13,200</p>
          <p className="percentage">+10%</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart">
          <h3>Active Users</h3>
          {/* Here you can insert your chart component */}
        </div>
        <div className="chart">
          <h3>Sales History</h3>
          {/* Here you can insert your chart component */}
        </div>
      </div>

      <div className="projects">
        <h3>Projects</h3>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Members</th>
              <th>Budget</th>
              <th>Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Soft UI Shopify Version</td>
              <td>3</td>
              <td>$14,000</td>
              <td>60%</td>
            </tr>
            <tr>
              <td>Progress Track</td>
              <td>5</td>
              <td>$10,000</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Fix Platform</td>
              <td>2</td>
              <td>$20,000</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;