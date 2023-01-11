import React from "react";
import { Typography,Grid,Grow,Tooltip,Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    title:{
        textOverflow:"ellipsis",
        textAlign:"center",
        overflow:"hidden",
        marginBottom:"10px",
        whiteSpace:"nowrap"
    },
    movie:{
        padding:"10px"
    },
    image:{
     width:"200px",
     borderRadius:"20px",
     marginBottom:"10px"
    }
   }));
const Movie = ({movie,key,i}) => {
const classes=useStyles()
const theme=useTheme()
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.con}>
     <Typography variant="h6" className={classes.title}>{movie.title}</Typography>
     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={classes.image}></img>
    </Grid>
  )
};

export default Movie;
