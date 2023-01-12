
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
const theme = createMuiTheme();
export default makeStyles((theme)=>({
    categories:{
        paddingRight:"7rem",
        fontFamily:"sans-serif",
        color:"grey",
        fontSize:"0.9rem",
        marginBottom:"0.5rem",
        marginTop:"1rem"
    },
    image:{
        marginBottom:"1.5rem",
        marginTop:"-2.8rem",
        paddingTop:"0.5rem",
        width:"150px",

    },
    links:{
        textDecoration:"none",
        color:"black",
    },
    categories2:{
        paddingRight:"8rem",
        fontFamily:"sans-serif",
        color:"grey",
        fontSize:"0.9rem",
        marginBottom:"0.5rem",
        marginTop:"1rem"

    },
    [theme.breakpoints.down('xs')]:{
        image:{
            marginBottom:"1.5rem",
            marginTop:"-3rem",
            paddingTop:"0.5rem",
            width:"150px",
            marginLeft:"2rem"
    
        },
    },
    [theme.breakpoints.down('sm')]: {
        categories:{
        
            fontFamily:"sans-serif",
            color:"grey",
            fontSize:"0.9rem",
            marginBottom:"0.5rem",
            marginTop:"1rem",
            marginLeft:"1rem"
        },
        categories2:{
            paddingRight:"8rem",
            fontFamily:"sans-serif",
            color:"grey",
            fontSize:"0.9rem",
            marginBottom:"0.5rem",
            marginTop:"1rem",
            marginLeft:"1rem"
    
        },
        
      },
      logo:{
        width:"30px"
    }
}))