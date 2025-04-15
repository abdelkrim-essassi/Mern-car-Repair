import { useState } from 'react';
import '../styles/AppointmentsSection.css';

const initialAppointments = [
  {
    id: 1,
    mechanic: 'John Smith',
    date: '2025-04-14 09:00',
    service: 'Change brakes',
    status: 'Upcoming',
  },
  {
    id: 2,
    mechanic: 'Emma Brown',
    date: '2025-04-05 10:00',
    service: 'Engine check',
    status: 'Completed',
  },
];

function AppointmentsSection() {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleCancel = (id) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id && appt.status === 'Upcoming'
          ? { ...appt, status: 'Cancelled' }
          : appt
      )
    );
  };

  return (
    <div className="appointments-section">
      <h3>My Appointments</h3>
      {appointments.length > 0 ? (
        appointments.map((appt) => (
          <div key={appt.id} className="appointment">
            <p><strong>Mechanic:</strong> {appt.mechanic}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Service:</strong> {appt.service}</p>
            <p><strong>Status:</strong> {appt.status}</p>
            {appt.status === 'Upcoming' && (
              <button onClick={() => handleCancel(appt.id)}>Cancel</button>
            )}
          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

export default AppointmentsSection;