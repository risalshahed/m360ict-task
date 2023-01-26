import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { Spacex } from '../types/spacex';

const getSpacexData = async() => {
  const response = await axios.get('https://api.spacexdata.com/v3/launches');
  return response;
}

export const spacexApi = createApi({
  reducerPath: 'spacexApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/' }),
  baseQuery: getSpacexData,
  endpoints: (builder) => ({
    getAllSpacex: builder.query<Spacex[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetAllSpacexQuery } = spacexApi;