import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "MOOGAMBIGAI ENTERPRISES",
  established: 2020,
  location: "Chennai, Tamil Nadu, India",
  phone: "+91-44-61753149 , +91-7708763750",
  email: "Moogambigaid5@gmail.com",
  productRange: [
    "Automotive Wiring Harnesses",
    "Industrial Wiring Harnesses",
    "Consumer Electronics Wiring Harnesses",
    "Connectors and Terminals",
    "Custom Wiring Solutions"
  ],
 services: [
  "Import &  export ",
  "Custom clearance",
  "Freight forwarding",
  "Door-to-door delivery",
  "Real-time shipment",
  "Inventory management"
]
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {}
});

export default companySlice.reducer;
