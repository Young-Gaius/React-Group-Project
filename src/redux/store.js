import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers({
});

const middleware = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
