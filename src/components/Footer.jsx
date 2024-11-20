import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function LoginFooter() {
  return (
    <Box component="footer" sx={{ padding: '0.5rem', position: 'absolute', bottom: 0, width: '100%' }}>
      <Box className="useful-links" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, margin: '0 0.5rem' }}>
          <strong>Swigato</strong> &copy; 2024
        </Typography>
        <Link
          href="#"
          sx={{
            color:"#000",
            fontSize: '12px',
            margin: '0 0.5rem',
            opacity: 0.7,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          User Agreement
        </Link>
        <Link
          href="#"
          sx={{
            color:"#000",
            fontSize: '12px',
            margin: '0 0.5rem',
            opacity: 0.7,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          sx={{
            color:"#000",
            fontSize: '12px',
            margin: '0 0.5rem',
            opacity: 0.7,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Community Guidelines
        </Link>
        <Link
          href="#"
          sx={{
            color:"#000",
            fontSize: '12px',
            margin: '0 0.5rem',
            opacity: 0.7,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Cookie Policy
        </Link>
        <Link
          href="#"
          sx={{
            color:"#000",
            fontSize: '12px',
            margin: '0 0.5rem',
            opacity: 0.7,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Send Feedback
        </Link>
        <Link
          href="#"
          sx={{
            color: '#000',
            fontSize: '12px',
            margin: '0 0.5rem',
            marginTop:'-0.5rem',
            opacity: 0.7,
            textDecoration: 'none',
            display: 'flex',           // Set display to 'flex' for better alignment
            alignItems: 'center',      // Vertically align content
            '&:hover': {
              textDecoration: 'underline',
              color: '#b30000',
              fontWeight: 600,
            }
          }}
        >
          Languages
          <IconButton size="small">
            <ExpandMoreIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

export default LoginFooter;
