import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './redux/bannerSlice';

const store = configureStore({
  reducer: {
    banner: bannerReducer,
  },
});

export default store;
