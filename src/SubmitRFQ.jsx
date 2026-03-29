import React, { useState } from 'react';
import {
  Grid,
  Card,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import emailjs from '@emailjs/browser';

const SubmitRFQ = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    const form = e.target;
    const formData = new FormData(form);
    const user_name = formData.get('user_name');
    const user_email = formData.get('user_email');
    const part_no = formData.get('part_no');
    const quantity = formData.get('quantity');
    const contact_number = formData.get('contact_number');
    
    if (!user_name || !user_email || !part_no || !quantity || !contact_number) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields.',
        severity: 'error'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address.',
        severity: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Prepare data with both user_name and name (for template compatibility)
      const templateParams = {
        user_name: user_name,
        name: user_name,  // This fixes the {{name}} placeholder
        user_email: user_email,
        part_no: part_no,
        quantity: quantity,
        target_price: formData.get('target_price') || 'Not specified',
        contact_number: contact_number
      };
      
      console.log('Sending RFQ with data:', templateParams);
      
      const result = await emailjs.send(
        "service_nmkvasf",
        "template_52mwr2g",
        templateParams,
        "DIXoGh3XS7TeZs4YP"
      );
      
      console.log('Success:', result.text);
      setSnackbar({
        open: true,
        message: 'RFQ submitted successfully! We will contact you soon.',
        severity: 'success'
      });
      e.target.reset(); // Clear the form
      
    } catch (error) {
      console.error('Error details:', error);
      setSnackbar({
        open: true,
        message: `Failed to submit RFQ: ${error.text || 'Please try again later.'}`,
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
      <Card
        id="submit"
        sx={{
          maxWidth: 700,
          mx: "auto",
          p: { xs: 2, sm: 3, md: 4 },
          mt: { xs: 2, sm: 3, md: 4 },
          width: { xs: "95%", sm: "98%", md: "100%" },
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="#1e50a2"
          gutterBottom
          sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' } }}
        >
          Submit RFQ
        </Typography>
        
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Fill in the details below and we'll get back to you with the best quote
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="user_name"
                required
                variant="outlined"
                placeholder="Enter your full name"
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="user_email"
                type="email"
                required
                variant="outlined"
                placeholder="your@email.com"
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Part Number"
                name="part_no"
                required
                variant="outlined"
                placeholder="Enter part number"
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                type="number"
                required
                variant="outlined"
                placeholder="Enter quantity"
                InputProps={{
                  sx: { borderRadius: 2 },
                  inputProps: { min: 1 }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Target Price (Optional)"
                name="target_price"
                type="number"
                variant="outlined"
                placeholder="Enter target price per unit"
                InputProps={{
                  sx: { borderRadius: 2 },
                  inputProps: { min: 0, step: 0.01 }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Number"
                name="contact_number"
                type="tel"
                required
                variant="outlined"
                placeholder="Enter mobile number"
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    px: { xs: 4, sm: 6 },
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    backgroundColor: '#1e50a2',
                    '&:hover': {
                      backgroundColor: '#0e3a7a',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#cccccc',
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                      Submitting...
                    </>
                  ) : (
                    'Submit RFQ'
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};
    
export default SubmitRFQ;