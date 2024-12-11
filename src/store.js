import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reviewsReducer from './reducers/reviewsReducer';
import rootSaga from './sagas/reviewsSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
