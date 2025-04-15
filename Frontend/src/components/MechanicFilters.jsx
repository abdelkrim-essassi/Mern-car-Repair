import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/MechanicFilters.css';

function MechanicFilters({ filters, setFilters }) {
  const [localSearch, setLocalSearch] = useState(filters.search);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filters, search: localSearch });
  };

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handleSpecializationChange = (e) => {
    setFilters({ ...filters, specialization: e.target.value });
  };

  return (
    <div className="mechanic-filters">
      <form onSubmit={handleSearchSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search mechanics by name or keyword"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <button type="submit"><FaSearch /></button>
      </form>
      <div className="filter-options">
        <div className="filter-item">
          <label>Location</label>
          <select onChange={handleLocationChange}>
            <option value="">All</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Specialization</label>
          <select onChange={handleSpecializationChange}>
            <option value="">All</option>
            <option value="Brakes">Brakes</option>
            <option value="Engine">Engine</option>
            <option value="Transmission">Transmission</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MechanicFilters;