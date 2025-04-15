import { FaUsers, FaWrench, FaShoppingCart, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import '../styles/AdminOverview.css';

function AdminOverview() {
  const metrics = {
    totalUsers: 1200,
    totalMechanics: 150,
    totalOrders: 850,
    totalAppointments: 300,
    totalRevenue: 125000.00,
  };

  return (
    <div className="admin-overview">
      <h3>Overview</h3>
      <div className="metrics">
        <div className="metric-card">
          <FaUsers className="metric-icon" />
          <h4>Total Users</h4>
          <p>{metrics.totalUsers}</p>
        </div>
        <div className="metric-card">
          <FaWrench className="metric-icon" />
          <h4>Total Mechanics</h4>
          <p>{metrics.totalMechanics}</p>
        </div>
        <div className="metric-card">
          <FaShoppingCart className="metric-icon" />
          <h4>Total Orders</h4>
          <p>{metrics.totalOrders}</p>
        </div>
        <div className="metric-card">
          <FaCalendarAlt className="metric-icon" />
          <h4>Total Appointments</h4>
          <p>{metrics.totalAppointments}</p>
        </div>
        <div className="metric-card">
          <FaDollarSign className="metric-icon" />
          <h4>Total Revenue</h4>
          <p>${metrics.totalRevenue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminOverview;