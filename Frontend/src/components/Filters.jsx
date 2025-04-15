import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Filters.css';

function Filters({ filters, setFilters }) {
  const [localSearch, setLocalSearch] = useState(filters.search);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filters, search: localSearch });
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.split('-');
    setFilters({ ...filters, priceRange: [parseInt(value[0]), parseInt(value[1])] });
  };

  const handleBrandChange = (e) => {
    setFilters({ ...filters, brand: e.target.value });
  };

  const handleCompatibilityChange = (e) => {
    setFilters({ ...filters, compatibility: e.target.value });
  };

  return (
    <div className="filters">
      <form onSubmit={handleSearchSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search parts by reference, brand, or model"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <button type="submit"><FaSearch /></button>
      </form>
      <div className="filter-options">
        <div className="filter-item">
          <label>Price Range</label>
          <select onChange={handlePriceChange}>
            <option value="0-1000">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-1000">$200+</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Brand</label>
          <select onChange={handleBrandChange}>
            <option value="">All</option>
            <option value="Bosch">Bosch</option>
            <option value="Denso">Denso</option>
            <option value="NGK">NGK</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Compatibility</label>
          <select onChange={handleCompatibilityChange}>
            <option value="">All</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;