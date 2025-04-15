import '../styles/AccountNavigation.css';

function AccountNavigation({ activeSection, setActiveSection }) {
  return (
    <nav className="account-nav">
      <ul>
        <li
          className={activeSection === 'profile' ? 'active' : ''}
          onClick={() => setActiveSection('profile')}
        >
          Profile
        </li>
        <li
          className={activeSection === 'orders' ? 'active' : ''}
          onClick={() => setActiveSection('orders')}
        >
          Orders
        </li>
        <li
          className={activeSection === 'appointments' ? 'active' : ''}
          onClick={() => setActiveSection('appointments')}
        >
          Appointments
        </li>
      </ul>
    </nav>
  );
}

export default AccountNavigation;