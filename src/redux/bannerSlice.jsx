import { createSlice } from '@reduxjs/toolkit';
import car from '../assets/car.png';

const initialState = {
  value: car,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setBanner: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
