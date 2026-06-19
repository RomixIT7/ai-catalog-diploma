import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
  error: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const globalReducer = globalSlice.reducer;
