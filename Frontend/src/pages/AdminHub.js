import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminNavigation from '../components/AdminNavigation';
import AdminOverview from '../components/AdminOverview';
import AdminUsers from '../components/AdminUsers';
import AdminMechanics from '../components/AdminMechanics';
import AdminOrders from '../components/AdminOrders';
import AdminAppointments from '../components/AdminAppointments';
import AdminReports from '../components/AdminReports';
import '../styles/AdminHub.css';

function AdminHub() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="admin">
      <Header />
      <main>
        <h2>Admin Hub</h2>
        <div className="hub-content">
          <AdminNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="hub-details">
            {activeSection === 'overview' && <AdminOverview />}
            {activeSection === 'users' && <AdminUsers />}
            {activeSection === 'mechanics' && <AdminMechanics />}
            {activeSection === 'orders' && <AdminOrders />}
            {activeSection === 'appointments' && <AdminAppointments />}
            {activeSection === 'reports' && <AdminReports />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminHub;