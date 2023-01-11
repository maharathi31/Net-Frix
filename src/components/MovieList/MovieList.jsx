import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@mui/material";
import Movie from "../Movie/Movie";
import { useTheme } from '@mui/styles';
const useStyles = makeStyles((theme)=>({
   movieContainer:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
    overflow:"auto",
   },
   [theme.breakpoints.down('sm')]: {
    justifyContent:"center"
  },
  movieContainer:{
  [theme.breakpoints.up('md')]: {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
    overflow:"auto",
    maxWidth:"80%",
    marginLeft:"15rem"
  },
  [theme.breakpoints.between('sm','md')]: {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
    overflow:"auto",
    marginLeft:"15rem"
  }},
  }));

const MovieList = ({movies}) => {
const theme=useTheme()
const classes=useStyles()
  return (<Grid container className={classes.movieContainer}>
   {movies.results.map((movie,i)=>(
    <Movie movie={movie} key={i} i={i}/>
   ))}
    </Grid>)
};

export default MovieList;
