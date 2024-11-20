import React from 'react';
import logo from "/images/restaurant-logo.png";
import { Box, Avatar, Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Box sx={{
        position: 'absolute',
        top:0,
        width:'100%',
        display: "flex",
        alignItems: "flex-start",
        ml: "20rem"
      }}>
       <Link component={RouterLink} to="/" > 
        <Avatar sx={{ 
            height:60,
            width: 60,
        }} 
        alt="cafelogo" src={logo} />
        </Link>
       </Box> 
  )
}

export default Header;
