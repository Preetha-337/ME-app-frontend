import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Menu items declared outside
const menuItems = [    
       
    
  { text: "Home", link: "/home" },
  { text: "AboutUs", link: "/aboutUs" },
  { text: "ContactUs", link: "/contact" },
  { text: "Services", link: "/service" },
  {text:"Products",link:"/product"},
     { text: "Electrical", link: "/electrical" }, 
   
  {text:"Application Area",link:"/application"},
    { text: "Electronics", link: "/electronics" }, 
  {text:"Submit RFQ",link:"/submit"}
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const isTabletOrBelow = useMediaQuery("(max-width:1024px)");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        {/* MENU ICON */}
        {isTabletOrBelow && (
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        {/* DESKTOP MENU */}
        {!isTabletOrBelow && (
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: 0,
           
            }}
          >
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component="a"
                href={item.link}
                sx={{ width: "auto", px: 1.5 ,  color:"white", transition:"all 0.3s ease", "&:hover":{backgroundColor:"rgba(255,255,255,0.15)" }}}
              >
                <ListItemText
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 200,
            height: "100%",
            background: "linear-gradient(135deg, #4facfe, #4facfe)",
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component="a"
                href={item.link}
                onClick={() => setOpen(false)}
                sx={{ px: 2,  color:"white",  }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}


export default Navbar;
