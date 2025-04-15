import { FaTachometerAlt, FaUsers, FaWrench, FaShoppingCart, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import '../styles/AdminNavigation.css';

function AdminNavigation({ activeSection, setActiveSection }) {
  return (
    <nav className="admin-nav">
      <ul>
        <li
          className={activeSection === 'overview' ? 'active' : ''}
          onClick={() => setActiveSection('overview')}
        >
          <FaTachometerAlt className="nav-icon" /> Overview
        </li>
        <li
          className={activeSection === 'users' ? 'active' : ''}
          onClick={() => setActiveSection('users')}
        >
          <FaUsers className="nav-icon" /> Users
        </li>
        <li
          className={activeSection === 'mechanics' ? 'active' : ''}
          onClick={() => setActiveSection('mechanics')}
        >
          <FaWrench className="nav-icon" /> Mechanics
        </li>
        <li
          className={activeSection === 'orders' ? 'active' : ''}
          onClick={() => setActiveSection('orders')}
        >
          <FaShoppingCart className="nav-icon" /> Orders
        </li>
        <li
          className={activeSection === 'appointments' ? 'active' : ''}
          onClick={() => setActiveSection('appointments')}
        >
          <FaCalendarAlt className="nav-icon" /> Appointments
        </li>
        <li
          className={activeSection === 'reports' ? 'active' : ''}
          onClick={() => setActiveSection('reports')}
        >
          <FaChartLine className="nav-icon" /> Reports
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavigation;