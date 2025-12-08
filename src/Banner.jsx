// Banner.js
import React,{useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import car from './assets/car.png'
import wire from './assets/wire.png'
import carwire from './assets/carwire.png'
const initialState = {
  value: car,
};

const BannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setBanner: (state, action) => {
      state.value = action.payload;
    },
 
  },
});

export const { setBanner } = BannerSlice.actions;
export const bannerReducer = BannerSlice.reducer;

// --- React Component ---
const Banner = () => {
  const bannerImage = useSelector((state) => state.banner.value);
  const dispatch = useDispatch();
  const images = [car,wire,carwire];

 useEffect(()=>{
  let index =0;
  const interval = setInterval(()=>{
    index=(index+1) % images.length;
  dispatch(setBanner(images[index]));
  },3000);
  return ()=> clearInterval(interval);
},[dispatch]);

  return (
    <div>
      <div>
        <img 
          src={bannerImage} 
          alt="Banner" 
          style={{ 
            width: '100%', 
            height: '420px',
            borderRadius: '10px',
          }}
        />
      </div>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '10px', 
        borderRadius: '5px',
        display: 'inline-block'
      }}>
      </div>
    </div>
  );
};

export default Banner