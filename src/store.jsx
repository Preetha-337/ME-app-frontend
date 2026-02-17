import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './bannerSlice';
import companyReducer from './CompanySlice.jsx';

const store = configureStore({
  reducer: {
    banner: bannerReducer,
    company: companyReducer,
  },
});

export default store;
