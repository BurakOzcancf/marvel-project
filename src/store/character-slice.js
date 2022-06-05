import { createSlice } from "@reduxjs/toolkit";
const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: [],
  },
  reducers: {
    addFavouriteCharacter: (state, action) => {
      const itemIndex = state.character.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.character = [...state.character, action.payload];
      } else {
        state.character = state.character.filter(
          (fav) => fav.id !== action.payload.id
        );
      }
    },
  },
});
export default characterSlice.reducer;
export const { addFavouriteCharacter } = characterSlice.actions;
