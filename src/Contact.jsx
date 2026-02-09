import React from "react";
import { useSelector } from "react-redux";
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
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import SendIcon from "@mui/icons-material/Send";
import Business from "@mui/icons-material/Business";
import CalendarToday from "@mui/icons-material/CalendarToday";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";

const Contact = () => {
  const company = useSelector((state) => state.company);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const listFontSize = isMobile ? "0.75rem" : isTablet ? "0.85rem" : "0.95rem";

  return (
    <Box sx={{ p: 5, mx: "auto",   maxWidth:{md:"50%",sm:500,xs:450},
            width:{md:"100%",sm:"100%",xs:500} , }}>
      <Card sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" fontWeight={700} align="center">
          Contact Us
        </Typography>

        <TextField label="Name" fullWidth />
        <TextField
          label="Mobile No"
          fullWidth
          inputProps={{ maxLength: 10 }}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />

        <TextField label="Email" fullWidth />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Card>

      <List sx={{ mt: 2 }}>
        {[
          { icon: <Business />, label: "Name", value: company?.name },
          {
            icon: <CalendarToday />,
            label: "Established",
            value: company?.established,
          },
          { icon: <LocationOn />, label: "Location", value: company?.location },
          { icon: <Phone />, label: "Phone", value: company?.phone },
          { icon: <Email />, label: "Email", value: company?.email },
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {React.cloneElement(item.icon, {
                color: "primary",
                fontSize: isMobile ? "small" : "medium",
              })}
            </ListItemIcon>

            <Typography sx={{ fontSize: listFontSize }}>
              <strong>{item.label}:</strong> {item.value || "-"}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Contact;
