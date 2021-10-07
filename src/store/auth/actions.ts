import { createAsyncThunk } from '@reduxjs/toolkit';

export const authenticate = createAsyncThunk(
  'authenticate',
  async ({ name, password }: { name: string; password: string }) => ({
    name,
    password,
  }),
);
