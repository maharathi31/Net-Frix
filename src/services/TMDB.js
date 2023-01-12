import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"
const tmdbkey='63df3cef7e84331f3ba205fafd383d48'
const page=1
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const tmdbApi=createApi({
    reducerPath:"tmdb",
    baseQuery:fetchBaseQuery({baseUrl:"https://api.themoviedb.org/3"}),
    endpoints:(builder)=>({
     getMovies:builder.query({
        query:()=>`movie/popular?api_key=${tmdbkey}`
     }),
     getGenres:builder.query({
        query:()=>`genre/movie/list?page=${page}&api_key=${tmdbkey}`
     }),
    })
})
export const { useGetMoviesQuery}=tmdbApi;
export const { useGetGenresQuery}=tmdbApi;