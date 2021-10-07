import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/authSlice';

const reducers = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer: reducers,
});

export { store };
