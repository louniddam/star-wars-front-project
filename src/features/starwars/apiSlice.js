import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const starwarsApi = createApi({
    reducerPath: 'starwarsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
      getPlanets: builder.query({
        query: (page) => `/planets/?page=${page}`,
      }),
      getPlanetsById: builder.query({
        query: (id) => `planets/${id}`,
      }),
      getPeople: builder.query({
        query: (page) => `/people/?page=${page}`,
      }),
      getPoepleById: builder.query({
        query: (id) => `people/${id}`,
      }),
      getStarships: builder.query({
        query: (page) => `/starships/?page=${page}`,
      }),
      getStarshipsById: builder.query({
        query: (id) => `starships/${id}`,
      })
    }),
  })
  
export const { useGetPlanetsQuery, useGetPeopleQuery, useGetStarshipsQuery, useGetPlanetsByIdQuery, useGetPoepleByIdQuery, useGetStarshipsByIdQuery } = starwarsApi