import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import {
  Box,
  Card,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Button,
  useMediaQuery,
  Link,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import Business from "@mui/icons-material/Business";
import CalendarToday from "@mui/icons-material/CalendarToday";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";

// Add your actual credentials here
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_0vypwma", 
  TEMPLATE_ID: "template_j8xgpbn", 
  PUBLIC_KEY: "Kj0puaWRNsFuYb-Qp" 
};
const Contact = () => {
  const company = useSelector((state) => state.company);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const listFontSize = isMobile ? "0.75rem" : isTablet ? "0.85rem" : "0.95rem";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

 useEffect(() => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

const sendEmail = async () => {
 
  if (!formData.name.trim()) {
    setSnackbar({
      open: true,
      message: "Please enter your name",
      severity: "error"
    });
    return;
  }
  
  if (!formData.mobile.trim()) {
    setSnackbar({
      open: true,
      message: "Please enter your mobile number",
      severity: "error"
    });
    return;
  }
  

  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(formData.mobile)) {
    setSnackbar({
      open: true,
      message: "Please enter a valid 10-digit mobile number",
      severity: "error"
    });
    return;
  }
  
  if (!formData.email.trim()) {
    setSnackbar({
      open: true,
      message: "Please enter your email",
      severity: "error"
    });
    return;
  }
  

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setSnackbar({
      open: true,
      message: "Please enter a valid email address",
      severity: "error"
    });
    return;
  }

  setLoading(true);

  try {
    // Get current date and time
    const currentDate = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium'
    });
    const currentYear = new Date().getFullYear();

    const templateParams = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      to_name: company?.name || "MOOGAMBIGAI ENTERPRISES",
      current_date: currentDate,
      current_year: currentYear
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY 
    );

    console.log("Email sent successfully:", response);
    
    setSnackbar({
      open: true,
      message: "Message Sent Successfully!",
      severity: "success"
    });
    
    // Reset form
    setFormData({ name: "", mobile: "", email: "" });
    
  } catch (error) {
    console.error("EmailJS Error Details:", error);
    
    let errorMessage = "Failed to send message. ";
    
    // More detailed error handling
    if (error.text) {
      errorMessage += error.text;
    } else if (error.status === 401 || error.status === 403) {
      errorMessage += "Invalid EmailJS credentials. Please check your configuration.";
    } else if (error.status === 404) {
      errorMessage += "Service or template not found. Please verify your Service ID and Template ID.";
    } else if (error.message) {
      errorMessage += error.message;
    } else {
      errorMessage += "Please check your internet connection and try again.";
    }
    
    setSnackbar({
      open: true,
      message: errorMessage,
      severity: "error"
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <Box
      sx={{
        p: 5,
        mx: "auto",
        maxWidth: { md: "50%", sm: 500, xs: 450 },
        width: { md: "100%", sm: "100%", xs: 500 }
      }}
    >
      <Card sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" fontWeight={700} align="center">
          Contact Us
        </Typography>

        <TextField
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />

        <TextField
          label="Mobile No"
          name="mobile"
          fullWidth
          value={formData.mobile}
          inputProps={{ maxLength: 10 }}
          onChange={handleChange}
          disabled={loading}
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
          disabled={loading}
        />

        <Button
          variant="contained"
          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
          onClick={sendEmail}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </Card>

      <List sx={{ mt: 2 }}>
        {[
          { icon: <Business />, label: "Name", value: company?.name },
          {
            icon: <CalendarToday />,
            label: "Established",
            value: company?.established
          },
          { icon: <LocationOn />, label: "Location", value: company?.location },
          { icon: <Phone />, label: "Phone", value: company?.phone },
          { icon: <Email />, label: "Email", value: company?.email }
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {React.cloneElement(item.icon, {
                color: "primary",
                fontSize: isMobile ? "small" : "medium"
              })}
            </ListItemIcon>

            <Typography sx={{ fontSize: listFontSize }}>
              <strong>{item.label}:</strong>{" "}
              {item.label === "Email" ? (
                <Link
                  href={`mailto:${item.value}`}
                  underline="hover"
                  color="primary"
                >
                  {item.value}
                </Link>
              ) : item.label === "Phone" ? (
                <Link
                  href={`tel:${item.value}`}
                  underline="hover"
                  color="primary"
                >
                  {item.value}
                </Link>
              ) : (
                item.value || "-"
              )}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;