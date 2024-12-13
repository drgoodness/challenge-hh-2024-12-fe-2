import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReviews } from './reducers/reviewsReducer';
import ReviewsTable from './components/ReviewsTable.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div>
      <h1>Отзывы</h1>
      <ReviewsTable />
    </div>
  );
};

export default App;
