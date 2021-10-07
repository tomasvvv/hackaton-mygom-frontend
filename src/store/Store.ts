import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/authSlice';
import { spacesApi } from '../services/SpaceService';
import { userApi } from '../services/UserService';

const reducers = combineReducers({
  auth: authSlice,
  [userApi.reducerPath]: userApi.reducer,
  [spacesApi.reducerPath]: spacesApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export { store };
