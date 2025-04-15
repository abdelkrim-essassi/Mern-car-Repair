import { FaCalendarAlt, FaMoneyBillWave, FaEnvelope } from 'react-icons/fa';
import '../styles/MechanicDashboard.css';

function MechanicDashboard() {
  const metrics = {
    upcomingAppointments: 3,
    totalEarnings: 450.00,
    pendingMessages: 2,
  };

  return (
    <div className="mechanic-dashboard">
      <h3>Welcome, John Smith!</h3>
      <div className="metrics">
        <div className="metric-card">
          <FaCalendarAlt className="metric-icon" />
          <h4>Upcoming Appointments</h4>
          <p>{metrics.upcomingAppointments}</p>
        </div>
        <div className="metric-card">
          <FaMoneyBillWave className="metric-icon" />
          <h4>Total Earnings</h4>
          <p>${metrics.totalEarnings.toFixed(2)}</p>
        </div>
        <div className="metric-card">
          <FaEnvelope className="metric-icon" />
          <h4>Pending Messages</h4>
          <p>{metrics.pendingMessages}</p>
        </div>
      </div>
    </div>
  );
}

export default MechanicDashboard;