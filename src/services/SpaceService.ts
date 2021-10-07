import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiRoutes } from '../constants/api';
import { IApiSpaceEntity } from '../store/types/Space';

export const spacesApi = createApi({
  reducerPath: 'spacesApi',
  tagTypes: ['Space'],
  refetchOnMountOrArgChange: 0,
  refetchOnReconnect: true,
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  endpoints: (builder) => ({
    getSpaces: builder.query<Array<IApiSpaceEntity>, void>({
      query: () => ApiRoutes.spaces(),
      providesTags: ['Space'],
    }),
    addSpace: builder.mutation<IApiSpaceEntity, Partial<IApiSpaceEntity>>({
      query: (body) => ({
        url: ApiRoutes.spaces(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Space'],
    }),
    removeSpace: builder.mutation<null, number>({
      query: (body) => ({
        url: ApiRoutes.spaces(),
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Space'],
    }),
  }),
});

export const { useGetSpacesQuery, useRemoveSpaceMutation, useAddSpaceMutation } = spacesApi;
