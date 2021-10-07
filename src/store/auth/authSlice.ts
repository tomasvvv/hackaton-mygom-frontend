import { createSlice } from '@reduxjs/toolkit';

import { StorageService } from '../../services/StorageService';
import { authenticate } from './actions';

export interface IAuthState {
  userToken: string | null;
}

export const initialAuthState: IAuthState = {
  userToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, { payload }) => {
      const token = `${payload.name}${payload.password}`;
      StorageService.setAccessToken(token);
      state.userToken = token;
    });
  },
});

export default authSlice.reducer;
