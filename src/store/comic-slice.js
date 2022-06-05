import { createSlice } from "@reduxjs/toolkit";
const comicSlice = createSlice({
  name: "comic",
  initialState: {
    comic: [],
  },
  reducers: {
    addFavouriteComic: (state, action) => {
      const itemIndex = state.comic.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.comic = [...state.comic, action.payload];
      } else {
        state.comic = state.comic.filter((fav) => fav.id !== action.payload.id);
      }
    },
  },
});
export default comicSlice.reducer;
export const { addFavouriteComic, isFavComic } = comicSlice.actions;
