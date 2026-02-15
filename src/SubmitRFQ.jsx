import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Card
} from "@mui/material";
import emailjs from '@emailjs/browser';

const SubmitRFQ = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nmkvasf",   
      "template_52mwr2g",  
      e.target,
      "DIXoGh3XS7TeZs4YP"    
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("RFQ submitted successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to submit RFQ");
      }
    );

    e.target.reset();
  };

  return (
    <Grid sx={{ p: 1 }}>
      <Card
        id="submit"
        sx={{
          maxWidth: 700,
          mx: "auto",
          p: 3,
          mt: 4,
          width: { xs: 450, sm: "98%", md: "100%" },
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          color="#1e50a2"
          gutterBottom
        >
          Submit RFQ
        </Typography>

        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="user_name" required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Part No" name="part_no" required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Quantity" name="quantity" type="number" required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Target Price" name="target_price" type="number" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Contact Number" name="contact_number" type="tel" required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" name="user_email" type="email" required />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    px: { xs: 4, sm: 6 },
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  Submit RFQ
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Card>
    </Grid>
  );
};

export default SubmitRFQ;
