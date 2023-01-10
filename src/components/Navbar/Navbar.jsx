import React,{useState} from "react";
import useStyles from "./styles";
import { AppBar,Button,IconButton,Avatar,Toolbar,Drawer,useMediaQuery } from "@mui/material";
import { Menu,AccountCircle,Brightness4,Brightness7} from "@mui/icons-material";
import { styled, alpha } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/styles";
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar } from "..";
const Navbar = () => {
  const classes=useStyles();
  const theme=useTheme();
  const isMobile=useMediaQuery('(max-width:600px)');
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  return (<div className={classes.navi}>
    <AppBar position="fixed" className={classes.bar}>
      <Toolbar className={classes.nav}>
      {isMobile && <Menu/> }
       <Sidebar/>
      <div className={classes.nav1}>
        {!isMobile && <theme className="palette"></theme> === "dark"?<Brightness4/>:<Brightness7/>}
        {!isMobile &&
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
}
{!isMobile && <AccountCircle/>}
</div>
{isMobile &&
<Search className={classes.search}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>}
          {isMobile &&<AccountCircle/>}
      </Toolbar>
    </AppBar>

  </div>);
};

export default Navbar;
