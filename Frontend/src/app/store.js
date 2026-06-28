import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import leadReducer from "../features/lead/leadSlice";
import analyticsReducer from "../features/analytics/analyticsSlice";

export const store = configureStore({

  reducer: {

    auth: authReducer,
    leads: leadReducer,
    analytics: analyticsReducer
  }
});

