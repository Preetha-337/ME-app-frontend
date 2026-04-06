import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Card,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SubmitRFQ = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    part_no: "",
    quantity: "",
    target_price: "",
    contact_number: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("Kj0puaWRNsFuYb-Qp");
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.contact_number) {
      newErrors.contact_number = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contact_number)) {
      newErrors.contact_number = "Mobile number must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.part_no.trim()) {
      newErrors.part_no = "Part number is required";
    }

    if (!formData.quantity) {
      newErrors.quantity = "Quantity is required";
    } else if (formData.quantity <= 0) {
      newErrors.quantity = "Quantity must be greater than 0";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      part_no: formData.part_no,
      quantity: formData.quantity,
      target_price: formData.target_price || "Not specified",
      contact_number: formData.contact_number,
    };

    try {
      await emailjs.send(
        "service_0vypwma",
        "template_j4qf86n",
        templateParams
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        part_no: "",
        quantity: "",
        target_price: "",
        contact_number: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <Box sx={styles.container}>
      <Card sx={{ p: 4, maxWidth: 600, width: "100%" }}>
        <Typography variant="h5" fontWeight={700} align="center" mb={2}>
          Submit RFQ
        </Typography>

        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
          Fill the details and we will send the quotation
        </Typography>

        <TextField
          label="Full Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          disabled={loading}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          disabled={loading}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Part Number"
          name="part_no"
          fullWidth
          value={formData.part_no}
          onChange={handleChange}
          error={Boolean(errors.part_no)}
          helperText={errors.part_no}
          disabled={loading}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          fullWidth
          value={formData.quantity}
          onChange={handleChange}
          error={Boolean(errors.quantity)}
          helperText={errors.quantity}
          disabled={loading}
          inputProps={{ min: 1 }}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Target Price (Optional)"
          name="target_price"
          type="number"
          fullWidth
          value={formData.target_price}
          onChange={handleChange}
          disabled={loading}
          inputProps={{ min: 0, step: 0.01 }}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Contact Number"
          name="contact_number"
          fullWidth
          value={formData.contact_number}
          onChange={handleChange}
          error={Boolean(errors.contact_number)}
          helperText={errors.contact_number}
          disabled={loading}
          inputProps={{ maxLength: 10 }}
          sx={{ mb: 3 }}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />

        <Button
          fullWidth
          variant="contained"
          endIcon={
            loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <SendIcon />
            )
          }
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit RFQ"}
        </Button>
      </Card>

      <Snackbar
        open={Boolean(status)}
        autoHideDuration={4000}
        onClose={() => setStatus(null)}
      >
        {status === "success" ? (
          <Alert severity="success">RFQ submitted successfully!</Alert>
        ) : (
          <Alert severity="error">Failed to send RFQ</Alert>
        )}
      </Snackbar>
    </Box>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f7f8",
    padding: "20px",
  },
};

export default SubmitRFQ;