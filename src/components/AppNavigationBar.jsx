import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import SearchItems from './SearchItems';


function AppNavigationBar({ showCategory, menuList, numCount, handleThemeChange, handleFoodSearch }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSwitch = () =>{
    const newThemeMode = darkMode ? 'light':'dark';
    setDarkMode(!darkMode);
    handleTheme(newThemeMode);
  };

  const handleTheme = (themeMode) => {
    handleThemeChange(themeMode); // Invoke the function passed from props
    handleClose();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const foodName = formData.get('foodName');
    handleFoodSearch(foodName);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#b30000', width: '100vw', padding: '0 1.5rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav} // Anchor element for alignment
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {menuList.map((option) => (
          <MenuItem 
            key={option} 
            onClick={() => {
              showCategory(option); // Handle category selection
              handleCloseNavMenu(); // Close the menu
            }}
          >
            <Typography textAlign="center">{option}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuList.map((option) => (
              <Button
                key={option}
                sx={{ fontWeight: '700', my: 2, color: 'white', display: 'block' }}
                onClick={() => showCategory(option)}
              >
                {option}
              </Button>
            ))}
          </Box>
            <SearchItems handleSubmit={handleSubmit}/>
          <IconButton aria-label="cart">
            <Badge badgeContent={numCount} color="primary">
              <ShoppingCartIcon style={{ color: '#fff' }} />
            </Badge>
          </IconButton>
            <Switch style={{ color: '#fff' }} onChange={handleSwitch}/>             
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppNavigationBar;
