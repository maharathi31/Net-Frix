import { makeStyles } from "@mui/styles";
import { bgcolor } from "@mui/system";
export default makeStyles(()=>({
nav:{
    display:"flex",
    justifyContent:"space-around",
    backgroundColor:"light-blue",
    height:"5rem",
    
},
search:{
maxWidth:"50%",
marginRight:"2rem"
},
nav1:{
    display:"flex",
    flexGrow:"1",
    justifyContent:"space-around",
    alignItems:"center"
},
navi:{
    marginBottom:"7rem"
}
}))