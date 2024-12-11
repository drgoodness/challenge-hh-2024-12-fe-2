import React from 'react';
import { useSelector } from 'react-redux';

const ReviewsTable = () => {
  const { reviews, filters } = useSelector((state) => state.reviews);

  const filteredReviews = reviews
    .filter((review) =>
      (!filters.platform || review.platform === filters.platform) &&
      review.rating >= filters.ratingRange[0] &&
      review.rating <= filters.ratingRange[1] &&
      review.text.toLowerCase().includes(filters.search.toLowerCase())
    )
    .sort((a, b) => {
      if (filters.sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const startIndex = (filters.page - 1) * filters.pageSize;
  const paginatedReviews = filteredReviews.slice(startIndex, startIndex + filters.pageSize);

  return (
    <table>
      <thead>
        <tr>
          <th>Платформа</th>
          <th>Рейтинг</th>
          <th>Время добавления</th>
          <th>Текст отзыва</th>
        </tr>
      </thead>
      <tbody>
        {paginatedReviews.map((review) => (
          <tr key={review.id}>
            <td>{review.platform}</td>
            <td>{review.rating}</td>
            <td>{new Date(review.date).toLocaleString()}</td>
            <td>{review.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewsTable;
