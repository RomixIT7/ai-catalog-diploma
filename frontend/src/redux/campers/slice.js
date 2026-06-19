import { createSlice } from "@reduxjs/toolkit";

import { fetchCamperById, fetchCampers } from "./operation.js";

const CAMPERS_INITIAL_STATE = {
  campers: [],
  camper: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: CAMPERS_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
