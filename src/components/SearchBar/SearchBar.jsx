import React from 'react';
import './SearchBar.css';
import { FiSearch, FiFilter } from 'react-icons/fi';

const SearchBar = ({ searchTerm, onSearchChange, filters, onFilterChange }) => {
  const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design', 'Machine Learning', 'Data Science', 'Game Development'];

  return (
    <div className="search-section">
      <div className="container">
        <div className="search-container">
          <div className="search-input-group">
            <FiSearch className="search-icon" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search projects by title, description, or technologies..."
              className="search-input"
              aria-label="Search projects"
            />
            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          <div className="filter-dropdown">
            <FiFilter className="filter-icon" />
            <select
              value={filters.category}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
              className="filter-select"
              aria-label="Filter by category"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="sort-options">
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value })}
              className="sort-select"
              aria-label="Sort projects"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title A-Z</option>
            </select>
          </div>
        </div>

        <div className="active-filters">
          {searchTerm && (
            <span className="active-filter-tag">
              Search: "{searchTerm}"
              <button onClick={() => onSearchChange('')}>×</button>
            </span>
          )}
          {filters.category !== 'All' && (
            <span className="active-filter-tag">
              Category: {filters.category}
              <button onClick={() => onFilterChange({ ...filters, category: 'All' })}>×</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
