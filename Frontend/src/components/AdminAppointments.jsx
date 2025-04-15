import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/AdminAppointments.css';

const initialAppointments = [
  {
    id: 1,
    customer: 'John Doe',
    mechanic: 'John Smith',
    date: '2025-04-14 09:00',
    service: 'Change brakes',
    status: 'Confirmed',
  },
  {
    id: 2,
    customer: 'Jane Smith',
    mechanic: 'Emma Brown',
    date: '2025-04-15 14:00',
    service: 'Engine check',
    status: 'Pending',
  },
];

function AdminAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredAppointments = appointments.filter((appt) => {
    const matchesSearch = appt.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.mechanic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? appt.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id, newStatus) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  return (
    <div className="admin-appointments">
      <h3>Manage Appointments</h3>
      <div className="controls">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter">
          <select onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      <div className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Mechanic</th>
              <th>Date</th>
              <th>Service</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.customer}</td>
                <td>{appt.mechanic}</td>
                <td>{appt.date}</td>
                <td>{appt.service}</td>
                <td>{appt.status}</td>
                <td>
                  <select
                    value={appt.status}
                    onChange={(e) => handleStatusChange(appt.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAppointments;