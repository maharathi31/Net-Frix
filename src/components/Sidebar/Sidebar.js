import * as React from 'react';
import {NavLink} from "react-router-dom"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import { useTheme } from '@mui/styles';
import useStyles from "./styles"
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from "../../genres"
import { CircularProgress } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
const drawerWidth = 230;
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
function ResponsiveDrawer(props) {
  const { window } = props;
  const genres=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"]
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes=useStyles()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dispatch=useDispatch()
  const theme=useTheme()
  const {data,isFetching}=useGetGenresQuery()
  const drawer = (
    <div>
      <Toolbar />
      <img src= {<theme className="palette"></theme> === "dark"?blueLogo:redLogo} className={classes.image}></img>
      <Divider />
      <p className={classes.categories}>Categories</p>
      <List>
        {['Popular', 'Top Rated', 'Upcoming'].map((label,value) => (
            <NavLink key={value} to="/movies" className={classes.links}>
          <ListItem key={label} disablePadding onClick={()=>{
            dispatch(selectGenreOrCategory(label))
          }}>
            <ListItemButton>
              <ListItemIcon>
              <img src={genreIcons[label.toLowerCase()]} className={classes.logo}></img>
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <p className={classes.categories2}>Genres</p>
      <List>
        {isFetching?( <Box display="flex" justifyContent="center">
       <CircularProgress size="4rem"/>
      </Box>):console.log(data.genres)}
        {genres.map((text,index) => (
            <NavLink key={index} to="/movies" className={classes.links}>
          <ListItem key={text} disablePadding onClick={()=>{
            dispatch(selectGenreOrCategory(index))
          }}>
            <ListItemButton>
              <ListItemIcon>
              <img src={genreIcons[text.toLowerCase()]} className={classes.logo}></img>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};

export default ResponsiveDrawer;
