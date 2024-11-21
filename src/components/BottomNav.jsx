import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { deepOrange } from '@mui/material/colors';

export default function BottomNav() {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ pb: 8 }} ref={ref}>
      <CssBaseline />
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
     <BottomNavigation sx={{ 
        width: "100% ", position:'fixed', 
        bottom:0, boxShadow:"0px 0px 4px 1px #aaa" 
        }} 
        value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Orders"
        value="orders"
        icon={<LocalMallIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction 
      icon={ <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>} />
    </BottomNavigation>
    </Paper>
    </Box> 
  );
}
