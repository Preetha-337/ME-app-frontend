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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
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

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
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
      mobile: formData.mobile,
    };

    try {
      await emailjs.send(
        "service_0vypwma",
        "template_j8xgpbn",
        templateParams
      );

      setStatus("success");
      setFormData({
        name: "",
        mobile: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <Box sx={styles.container}>
      <Card sx={{ p: 2, maxWidth: 500, width: "100%" }}>
        <Typography variant="h5" fontWeight={700} align="center" mb={2}>
          Contact Us
        </Typography>

        <TextField
          label="Name"
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
          label="Mobile No"
          name="mobile"
          fullWidth
          value={formData.mobile}
          onChange={handleChange}
          error={Boolean(errors.mobile)}
          helperText={errors.mobile}
          disabled={loading}
          inputProps={{ maxLength: 10 }}
          sx={{ mb: 2 }}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />

        <TextField
          label="Email"
          name="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          disabled={loading}
          sx={{ mb: 3 }}
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
          {loading ? "Sending..." : "Send"}
        </Button>
      </Card>

      <Snackbar
        open={Boolean(status)}
        autoHideDuration={4000}
        onClose={() => setStatus(null)}
      >
        {status === "success" ? (
          <Alert severity="success">Message sent successfully!</Alert>
        ) : (
          <Alert severity="error">Failed to send message</Alert>
        )}
      </Snackbar>
    </Box>
  );
};

const styles = {
  container: {
    minHeight: {md:"80vh",xs:"80vh",sm:"80vh"},
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f7f8",
    padding: "2px",
  },
};

export default Contact;