/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  filters: {
    platform: '',
    ratingRange: [0, 5],
    sortBy: 'date',
    search: '',
    page: 1,
    pageSize: 5,
  },
  loading: false,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    fetchReviews: (state) => {
      state.loading = true;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
      state.loading = false;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setPage: (state, action) => {
      state.filters.page = action.payload;
    },
  },
});

export const {
  fetchReviews, setReviews, setFilters, setPage,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;
