
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axiosInstance from "../../api/axiosInstance";


export const fetchAnalytics =
  createAsyncThunk(

    "analytics/fetchAnalytics",

    async () => {

      const response =
        await axiosInstance.get(
          "/analytics/overview"
        );

      return response.data;
    }
  );


const analyticsSlice =
  createSlice({

    name: "analytics",

    initialState: {

      data: {},

      loading: false,
    },

extraReducers: (builder) => {
  builder

    .addCase(
      fetchAnalytics.pending,
      (state) => {
        state.loading = true;
      }
    )

    .addCase(
      fetchAnalytics.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }
    )

    .addCase(
      fetchAnalytics.rejected,
      (state, action) => {
        state.loading = false;
        console.log(action.error);
      }
    );
}
  });


export default
 analyticsSlice.reducer;