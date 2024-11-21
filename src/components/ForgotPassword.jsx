import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Avatar, Link
} from "@mui/material";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import { Link as RouterLink } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reset link sent to:", email); // Replace with actual API call
    alert("If this email exists, a reset link has been sent.");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor:'#b30000' }}>
          <LockResetOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
          size="small"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
             size="small"
              required
              fullWidth
              name="password"
              label="Enter New Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 1 }}
          />
            <TextField
             size="small"
              required
              fullWidth
              name="password"
              label="Confirm New Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 1 }}
             />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 1, bgcolor:'#b30000',
                '&:hover': { bgcolor: '#ff0000' },
             }}
          >
            Reset Password
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
          >
            <Link component={RouterLink} to="/login"
            sx={{ textDecoration:'none', color:'#fff' }}
            >
                    Go Back
            </Link>
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          Enter your registered email address, and here you can reset your password.
        </Typography>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
