import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchReviews, setReviews } from '../reducers/reviewsReducer';
import fetchReviewsService from '../services/reviews';

function* fetchReviewsSaga() {
  try {
    const data = yield call(fetchReviewsService);
    yield put(setReviews(data));
  } catch (e) {
    console.error('Error loading reviews', e);
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchReviews.type, fetchReviewsSaga);
}
