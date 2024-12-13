import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReviews } from './reducers/reviewsReducer';
import ReviewsTable from './components/ReviewsTable.jsx';
import SearchBar from './components/SearchBar.jsx';
import Pagination from './components/Pagination.jsx';
import './styles/index.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="app">
      <h1 className="app-title">Отзывы</h1>
      <SearchBar />
      <ReviewsTable />
      <Pagination />
    </div>
  );
};

export default App;
