import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Menu items declared outside
const menuItems = [
  { text: "Home", link: "#about" },
  { text: "About Us", link: "#skill" },
  { text: "Contact", link: "#Project" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
        {/* MOBILE MENU ICON */}
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* DESKTOP MENU */}
        <List
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            padding: 0,
          }}
        >
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              component="a"
              href={item.link}
              sx={{ width: "auto", px: 2 }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ color: "white" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 200,
            height: "100%",
          background: "linear-gradient(135deg, #4facfe, #00f2fe)"

          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component="a"
                href={item.link}
                onClick={() => setOpen(false)}
                sx={{ px: 3 }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ color: "white" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
