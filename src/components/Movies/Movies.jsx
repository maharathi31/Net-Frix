import React,{useEffect,useState} from "react";
import { Box,CircularProgress,Typography,useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";
const Movies = () => {
  const {data,error,isFetching}=useGetMoviesQuery();
  if(isFetching){
    return(
      <Box display="flex" justifyContent="center">
       <CircularProgress size="4rem"/>
      </Box>
    )
  }

    if(!data.results.length){
      return(
        <Box display="flex" justifyContent="center">
         <Typography variant="h4">No Movies match the type</Typography>
        </Box>
      )
    }
  
  console.log(data)
  return (<div>
    <MovieList movies={data}/>
    </div>);
};

export default Movies;
