import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Users'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/',
    }),

    endpoints: (build) => ({
        takeUsers: build.query({
            query: () => 'users',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }: any) => ({
                              type: 'Users',
                              id,
                          })),
                          { type: 'Users', id: 'LIST' },
                      ]
                    : [{ type: 'Users', id: 'LIST' }],
        }),

        createUser: build.mutation({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
    }),
});

export const { useTakeUsersQuery, useCreateUserMutation } = authApi;
