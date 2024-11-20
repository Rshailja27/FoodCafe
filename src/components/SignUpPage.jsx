import React from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function SignUpPage() {
  return (
    <Box
    sx={{
      width:'100vw',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh", 
    }}
  >
     <Header />
    <Container maxWidth="xs" sx={{
        padding:'1rem',
        boxShadow:"0px 0px 4px 1px #aaa",
        borderRadius:'4px',
       
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Create an Account
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 1 }}>
          Please fill in the details to sign up
        </Typography>
        <Box component="form" sx={{ '& .MuiTextField-root': { mt : 1 } }}>
          <TextField
            size="small"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            InputLabelProps={{ required: false }} 
          />
          <TextField
            size="small"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            InputLabelProps={{ required: false }} 
          />
          <TextField
            size="small"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            InputLabelProps={{ required: false }} 
          />
          <TextField
            size="small"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            InputLabelProps={{ required: false }} 
          />
          <TextField
             size="small"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            InputLabelProps={{ required: false }} 
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: '#b30000',
              "&:hover": { bgcolor: '#ff0000' },
            }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              {"Already have an account? "}
              <Link component={RouterLink} to="/login" variant="body"
              sx={{ fontWeight:'600' }}>
                 Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    <Footer />
  </Box>
  )
}

export default SignUpPage;
