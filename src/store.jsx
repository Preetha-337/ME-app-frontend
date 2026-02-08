import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './redux/bannerSlice';
import companyReducer from './companySlice';

const store = configureStore({
  reducer: {
    banner: bannerReducer,
    company: companyReducer,
  },
});

export default store;
