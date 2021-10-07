import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiRoutes } from '../constants/api';
import { IApiUserEntity } from '../store/types/User';

export const userApi = createApi({
  reducerPath: 'usersApi',
  refetchOnMountOrArgChange: 0,
  refetchOnReconnect: true,
  keepUnusedDataFor: 0,
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<Array<IApiUserEntity>, void>({
      query: () => ApiRoutes.allUsers(),
      providesTags: ['User'],
    }),
    addUser: builder.mutation<IApiUserEntity, Partial<IApiUserEntity>>({
      query: (body) => ({
        url: ApiRoutes.addUser(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    removeUser: builder.mutation<null, number>({
      query: (body) => ({
        url: ApiRoutes.addUser(),
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useRemoveUserMutation } = userApi;
