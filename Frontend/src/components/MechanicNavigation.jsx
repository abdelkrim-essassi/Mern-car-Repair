import { FaTachometerAlt, FaUser, FaCalendarAlt, FaMoneyBillWave, FaEnvelope } from 'react-icons/fa';
import '../styles/MechanicNavigation.css';

function MechanicNavigation({ activeSection, setActiveSection }) {
  return (
    <nav className="mechanic-nav">
      <ul>
        <li
          className={activeSection === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveSection('dashboard')}
        >
          <FaTachometerAlt className="nav-icon" /> Dashboard
        </li>
        <li
          className={activeSection === 'profile' ? 'active' : ''}
          onClick={() => setActiveSection('profile')}
        >
          <FaUser className="nav-icon" /> Profile
        </li>
        <li
          className={activeSection === 'appointments' ? 'active' : ''}
          onClick={() => setActiveSection('appointments')}
        >
          <FaCalendarAlt className="nav-icon" /> Appointments
        </li>
        <li
          className={activeSection === 'earnings' ? 'active' : ''}
          onClick={() => setActiveSection('earnings')}
        >
          <FaMoneyBillWave className="nav-icon" /> Earnings
        </li>
        <li
          className={activeSection === 'messages' ? 'active' : ''}
          onClick={() => setActiveSection('messages')}
        >
          <FaEnvelope className="nav-icon" /> Messages
        </li>
      </ul>
    </nav>
  );
}

export default MechanicNavigation;