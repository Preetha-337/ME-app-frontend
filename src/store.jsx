// store.js
import { configureStore } from '@reduxjs/toolkit';
import { bannerReducer } from './Banner'; // Import from the combined component file

const store = configureStore({
  reducer: {
    banner: bannerReducer,
  },
});

export default store; 