import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountNavigation from '../components/AccountNavigation';
import ProfileSection from '../components/ProfileSection';
import OrdersSection from '../components/OrdersSection';
import AppointmentsSection from '../components/AppointmentsSection';
import '../styles/Account.css';

function Account() {
  const [activeSection, setActiveSection] = useState('profile'); // Default to Profile section

  return (
    <div className="account-page">
      <Header />
      <main>
        <h2>My Account</h2>
        <div className="account-content">
          <AccountNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="account-details">
            {activeSection === 'profile' && <ProfileSection />}
            {activeSection === 'orders' && <OrdersSection />}
            {activeSection === 'appointments' && <AppointmentsSection />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Account;