import { useState } from 'react';
import '../styles/MechanicAppointments.css';

const initialAppointments = [
  {
    id: 1,
    customer: 'Sarah K.',
    date: '2025-04-14 09:00',
    service: 'Change brakes',
    status: 'Pending',
  },
  {
    id: 2,
    customer: 'John M.',
    date: '2025-04-15 14:00',
    service: 'Engine check',
    status: 'Confirmed',
  },
];

function MechanicAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleStatusChange = (id, newStatus) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  return (
    <div className="mechanic-appointments">
      <h3>Appointments</h3>
      {appointments.length > 0 ? (
        appointments.map((appt) => (
          <div key={appt.id} className="appointment">
            <p><strong>Customer:</strong> {appt.customer}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Service:</strong> {appt.service}</p>
            <p><strong>Status:</strong> {appt.status}</p>
            {appt.status === 'Pending' && (
              <div className="appointment-actions">
                <button onClick={() => handleStatusChange(appt.id, 'Confirmed')}>
                  Accept
                </button>
                <button onClick={() => handleStatusChange(appt.id, 'Declined')}>
                  Decline
                </button>
              </div>
            )}
            {appt.status === 'Confirmed' && (
              <button onClick={() => handleStatusChange(appt.id, 'Completed')}>
                Mark as Completed
              </button>
            )}
          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

export default MechanicAppointments;