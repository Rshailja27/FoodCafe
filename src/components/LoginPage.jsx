import React from 'react';
import { Container, Box, TextField, Typography, 
  Button, Grid, Link,Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Header from './Header';
import Footer from './Footer';


function LoginPage() {
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        minHeight: '100vh', 
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Welcome to Food Cafe!
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 1 }}>
            Please log in to your account
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              size="small"
              required
              fullWidth
              id="email"
              label="Email or Phone"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{ required: false }} 
            />
            <TextField
             size="small"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{ required: false }}       
              slotProps={{
              input: {
              endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          },
        }}
            />
             
             <FormControlLabel 
                control={<Checkbox defaultChecked size="small" />} 
                label="Remember me" 
              />
              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                fontWeight:'500',
                bgcolor: '#b30000',
                '&:hover': { bgcolor: '#ff0000' },
              }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="/forgotpass"  variant="body2"
                sx={{fontWeight:'600'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>                
                  {"Don't have an account?"}                
                <Link component={RouterLink} to="/signup" 
                variant="body2" sx={{fontWeight:'600'}}>
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      <Footer />
    </Box>
  );
}

export default LoginPage;
