import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../reducers/reviewsReducer';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.reviews.filters.search);

  const handleSearchChange = (e) => {
    dispatch(setFilters({ search: e.target.value }));
  };

  return (
    <input
      type="text"
      placeholder="Поиск отзывов..."
      value={search}
      onChange={handleSearchChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
