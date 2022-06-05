import { createSlice } from "@reduxjs/toolkit";
const creatorSlice = createSlice({
  name: "creator",
  initialState: {
    creator: [],
  },
  reducers: {
    addFavouriteCreator: (state, action) => {
      const itemIndex = state.creator.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.creator = [...state.creator, action.payload];
      } else {
        state.creator = state.creator.filter(
          (fav) => fav.id !== action.payload.id
        );
      }
    },
  },
});
export default creatorSlice.reducer;
export const { addFavouriteCreator, isFavCreator } = creatorSlice.actions;
