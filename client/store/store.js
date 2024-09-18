import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './reducers/jobReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  jobs: jobReducer,
  users: userReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
