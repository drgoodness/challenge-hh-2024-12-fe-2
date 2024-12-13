import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../reducers/reviewsReducer';
import '../styles/Pagination.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, pageSize } = useSelector((state) => state.reviews.filters);
  const reviews = useSelector((state) => state.reviews.reviews);

  const totalPages = Math.ceil(reviews.length / pageSize);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="pagination">
      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num}
          onClick={() => handlePageChange(num + 1)}
          className={`pagination-button ${page === num + 1 ? 'active' : ''}`}
        >
          {num + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
