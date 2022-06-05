import { createSlice } from "@reduxjs/toolkit";
const serieSlice = createSlice({
  name: "serie",
  initialState: {
    serie: [],
  },
  reducers: {
    addFavouriteSerie: (state, action) => {
      const itemIndex = state.serie.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.serie = [...state.serie, action.payload];
      } else {
        state.serie = state.serie.filter((fav) => fav.id !== action.payload.id);
      }
    },
  },
});
export default serieSlice.reducer;
export const { addFavouriteSerie } = serieSlice.actions;
