import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodMenu from './components/FoodMenu';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgotPassword from './components/ForgotPassword';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles, CssBaseline }from '@mui/material';

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
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden", // Prevent overflow globally
          },
        }}
      />
    <Router>
    <Routes>
      <Route path="/" element={<FoodMenu handleThemeChange={handleThemeChange}/>} /> {/* Default route */}
      <Route path="/login" element={<LoginPage />} /> {/* Login route */}
      <Route path="/signup" element={<SignUpPage />} /> {/* Sign-Up route */}
      <Route path="/forgotpass" element={<ForgotPassword />} /> {/* Forgot Password route */}
    </Routes>
  </Router>
    </ThemeProvider>
  );
}
