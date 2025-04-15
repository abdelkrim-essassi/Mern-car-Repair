import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MechanicsList from '../components/MechanicsList';
import MechanicProfileModal from '../components/MechanicProfileModal';
import Filters from '../components/MechanicFilters'; // We'll create a new Filters component for mechanics
import '../styles/MechanicFinder.css';

function MechanicFinder() {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    specialization: '',
  });
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  return (
    <div className="mechanic-finder">
      <Header />
      <main>
        <section className="search-and-filters">
          <h2>Find a Trusted Mechanic</h2>
          <Filters filters={filters} setFilters={setFilters} />
        </section>
        <MechanicsList filters={filters} setSelectedMechanic={setSelectedMechanic} />
        {selectedMechanic && (
          <MechanicProfileModal
            mechanic={selectedMechanic}
            closeModal={() => setSelectedMechanic(null)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default MechanicFinder;