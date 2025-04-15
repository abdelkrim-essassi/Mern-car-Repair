import '../styles/MechanicsList.css';

const allMechanics = [
  {
    id: 1,
    name: 'John Smith',
    location: 'New York',
    specialization: 'Brakes',
    rating: 4.8,
    experience: '10 years',
    tariffs: '$50/hour',
    reviews: [
      { id: 1, quote: 'Great service, fixed my brakes in no time!', author: 'Sarah K.', rating: 5 },
      { id: 2, quote: 'Very professional.', author: 'Mike T.', rating: 4 },
    ],
    availability: ['2025-04-14 09:00', '2025-04-14 11:00', '2025-04-15 14:00'],
  },
  {
    id: 2,
    name: 'Emma Brown',
    location: 'Los Angeles',
    specialization: 'Engine',
    rating: 4.5,
    experience: '8 years',
    tariffs: '$60/hour',
    reviews: [
      { id: 1, quote: 'Fixed my engine issue quickly.', author: 'John M.', rating: 5 },
    ],
    availability: ['2025-04-14 10:00', '2025-04-15 09:00'],
  },
  {
    id: 3,
    name: 'Mike Johnson',
    location: 'Chicago',
    specialization: 'Transmission',
    rating: 4.7,
    experience: '12 years',
    tariffs: '$55/hour',
    reviews: [
      { id: 1, quote: 'Highly recommend!', author: 'Lisa R.', rating: 5 },
    ],
    availability: ['2025-04-14 13:00', '2025-04-15 15:00'],
  },
];

function MechanicsList({ filters, setSelectedMechanic }) {
  const filteredMechanics = allMechanics.filter((mechanic) => {
    const matchesSearch = mechanic.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesLocation = filters.location ? mechanic.location === filters.location : true;
    const matchesSpecialization = filters.specialization
      ? mechanic.specialization === filters.specialization
      : true;
    return matchesSearch && matchesLocation && matchesSpecialization;
  });

  return (
    <section className="mechanics-list">
      <div className="list">
        {filteredMechanics.length > 0 ? (
          filteredMechanics.map((mechanic) => (
            <div key={mechanic.id} className="mechanic-card">
              <h3>{mechanic.name}</h3>
              <p>Location: {mechanic.location}</p>
              <p>Specialization: {mechanic.specialization}</p>
              <div className="rating">
                <span>{mechanic.rating} ★</span>
              </div>
              <button onClick={() => setSelectedMechanic(mechanic)}>
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p>No mechanics found matching your criteria.</p>
        )}
      </div>
    </section>
  );
}

export default MechanicsList;