import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Divider,
} from "@mui/material";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Order submitted:", formData); // Replace with actual API call
    alert("Your order has been placed!");
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              size="small"
                required
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField size="small"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Address Section */}
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Address
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField size="small"
                required
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField size="small"
                required
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField size="small"
                required
                fullWidth
                label="ZIP/Postal Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Payment Information */}
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField size="small"
                required
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small"
                required
                fullWidth
                label="Expiry Date (MM/YY)"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small"
                required
                fullWidth
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Order Summary */}
          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total Items: 3
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total Price: $120.00
          </Typography>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1,bgcolor: '#b30000' }}
          >
            Place Order
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Checkout;
