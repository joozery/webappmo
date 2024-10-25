import React from 'react';
import { Line } from 'react-chartjs-2';

function EarPage() {
  // ข้อมูลสำหรับแสดงผลในตารางและกราฟ
  const tableData = {
    leftEar: [-5, -10, -20, -25, -35, -35],
    rightEar: [-20, -20, -25, -15, -15, -30],
    frequencies: ['500', '1K', '2K', '3K', '4K', '6K', '8K'],
  };

  // ข้อมูลกราฟ
  const data = {
    labels: tableData.frequencies,
    datasets: [
      {
        label: 'หูขวา',
        data: tableData.leftEar,
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
      {
        label: 'หูซ้าย',
        data: tableData.rightEar,
        fill: false,
        borderColor: 'red',
        tension: 0.1,
      },
    ],
  };

  // ตัวเลือกกราฟ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: -40,
        max: 0,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="ear-page">
      <h2>สมรรถภาพการได้ยินทางอาชีวเวชศาสตร์</h2>
      {/* ตารางตัวเลข */}
      <div className="table-container">
        <table className="hearing-table">
          <thead>
            <tr>
              <th>หูขวา</th>
              {tableData.frequencies.map((freq, index) => (
                <th key={index}>{freq}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>หูขวา</td>
              {tableData.leftEar.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
            <tr>
              <td>หูซ้าย</td>
              {tableData.rightEar.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* กราฟแสดงผล */}
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default EarPage;