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
        whiteSpace:"nowrap",
        marginTop:"10px",
        marginBottom:"20px",
    },
    movie:{
        padding:"10px"
    },
    image:{
     width:"200px",
     borderRadius:"20px",
     marginBottom:"8px",
     '&:hover':{
       transform:"scale(1.05)"
     },
    },
    t:{
      marginBottom:"10px",
      marginTop:"-1px"
    }
   }));
const Movie = ({movie,i}) => {
const classes=useStyles()
const theme=useTheme()
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.con}>

        <Link to={`/movie/${movie.id}`}>
     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={classes.image}></img>
     </Link>
     <div className={classes.t}>
     <Typography variant="h6" className={classes.title}>{movie.title}</Typography>
     <Tooltip disableTouchListener title={`${movie.vote_average/2}`}>
      <div>
     <Rating readOnly value={movie.vote_average/2}/>
     </div>
     </Tooltip>
     </div>
    </Grid>
  )
};

export default Movie;
