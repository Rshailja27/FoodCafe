import React, { useState } from 'react';
import FoodMenu from './components/FoodMenu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  const [themeMode, setThemeMode] = useState('light');

  const handleThemeChange = (mode) => {
    setThemeMode(mode);
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FoodMenu handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
}
