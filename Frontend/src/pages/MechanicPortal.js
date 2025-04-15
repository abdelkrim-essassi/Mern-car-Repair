import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MechanicNavigation from '../components/MechanicNavigation';
import MechanicDashboard from '../components/MechanicDashboard';
import MechanicProfile from '../components/MechanicProfile';
import MechanicAppointments from '../components/MechanicAppointments';
import MechanicEarnings from '../components/MechanicEarnings';
import MechanicMessages from '../components/MechanicMessages';
import '../styles/MechanicPortal.css';

function MechanicPortal() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="mechanic-portal">
      <Header />
      <main>
        <h2>Mechanic Portal</h2>
        <div className="portal-content">
          <MechanicNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="portal-details">
            {activeSection === 'dashboard' && <MechanicDashboard />}
            {activeSection === 'profile' && <MechanicProfile />}
            {activeSection === 'appointments' && <MechanicAppointments />}
            {activeSection === 'earnings' && <MechanicEarnings />}
            {activeSection === 'messages' && <MechanicMessages />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MechanicPortal;