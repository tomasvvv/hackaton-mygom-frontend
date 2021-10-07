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
  // eslint-disable-next-line max-len
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(spacesApi.middleware),
});

export { store };
