// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useHistory } from "react-router-dom";
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.black, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.black, 0.25),
//     },
//     marginLeft: 10,
    
//     width: '50%%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width:'70%',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));
  

const Header = () => {
  let history = useHistory();

 

    return (
    <div className='header'>
        <div  className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt=''></img>
        </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>


              <img src={searchIcon} />
              
              </div>

              <input className='searchInput' placeholder='Find something may be a collection or a gift..'
              

              
              />








            {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CryptoPunk
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box> */}
         
             
            
            
            
                
            
     
    



    
         </div>
     
     <div className='headerItems'>

        <button   onClick={() => {
          history.push("/Drop");
        }}  className='btn12'>Drop</button>
        <button 
              onClick={()=>{
                  history.push("/Marketplace")}}

           className='btn12'>Marketplace</button>
        <button 
              onClick={()=>{
                history.push("/Create")}}
        
        className='btn12'>Create</button>

     </div>
    <div className='headerActions'>
      <div className='themeSwitchContainer'>
          <img src={themeSwitchIcon}></img>
      </div>

    </div>

    <div className='loginContainer'>

      <button  
          onClick={()=>{
            history.push("./Login/Login")}}

      
      className='loginButton' >
        Log Out
      </button>
            
    </div>
    
</div>
    )
}
export default Header

















