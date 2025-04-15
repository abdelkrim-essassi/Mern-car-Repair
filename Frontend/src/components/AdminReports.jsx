import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/AdminReports.css';

const revenueData = [
  { month: 'Jan', revenue: 20000 },
  { month: 'Feb', revenue: 25000 },
  { month: 'Mar', revenue: 30000 },
  { month: 'Apr', revenue: 45000 },
];

const userGrowthData = [
  { month: 'Jan', users: 800 },
  { month: 'Feb', users: 900 },
  { month: 'Mar', users: 1000 },
  { month: 'Apr', users: 1200 },
];

function AdminReports() {
  const [reportType, setReportType] = useState('revenue');

  const handleExport = () => {
    alert('Exporting report as CSV...');
    // In a real app, this would generate and download a CSV file
  };

  return (
    <div className="admin-reports">
      <h3>Reports</h3>
      <div className="controls">
        <div className="filter">
          <select onChange={(e) => setReportType(e.target.value)}>
            <option value="revenue">Revenue Over Time</option>
            <option value="userGrowth">User Growth</option>
          </select>
        </div>
        <button onClick={handleExport}>Export Report</button>
      </div>
      <div className="report-chart">
        <h4>{reportType === 'revenue' ? 'Revenue Over Time' : 'User Growth'}</h4>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={reportType === 'revenue' ? revenueData : userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey={reportType === 'revenue' ? 'revenue' : 'users'}
              fill="#F97316"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminReports;