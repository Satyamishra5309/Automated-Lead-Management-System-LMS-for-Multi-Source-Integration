import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchLeads = createAsyncThunk(
  "leads/fetchLeads",
  async () => {
    const response = await axiosInstance.get("/leads");
    return response.data;
  }
);

export const updateLead = createAsyncThunk(

  "leads/updateLead",

  async ({id,data}) => {

    const response =
      await axiosInstance.put(

        `/leads/${id}`,

        data
      );

    return response.data;
  }
);


const leadSlice = createSlice({
  name: "leads",

  initialState: {
    leads: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.loading = false;
        state.leads = action.payload;
      })

      .addCase(

  updateLead.fulfilled,

  (state,action)=>{

    state.leads =
      state.leads.map(

        (lead)=>

          lead._id === action.payload._id

          ?

          action.payload

          :

          lead
      );
  }
)
  },
});

export default leadSlice.reducer;