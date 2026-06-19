import { createSlice } from "@reduxjs/toolkit";

const FAVORITES_INITIAL_STATE = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: FAVORITES_INITIAL_STATE,
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorite(state, action) {
      const favoriteIndex = state.favorites.findIndex((id) => {
        return id === action.payload;
      });
      state.favorites.splice(favoriteIndex, 1);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
