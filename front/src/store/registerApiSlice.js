import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApiSlice = createApi({
  reducerPath: "api/register",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (Credentials) => ({
        url: "/register",
        method: "POST",
        body: { ...Credentials },
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApiSlice;
