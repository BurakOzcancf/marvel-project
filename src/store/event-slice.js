import { createSlice } from "@reduxjs/toolkit";
const eventSlice = createSlice({
  name: "event",
  initialState: {
    event: [],
  },
  reducers: {
    addFavouriteEvent: (state, action) => {
      const itemIndex = state.event.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.event = [...state.event, action.payload];
      } else {
        state.event = state.event.filter((fav) => fav.id !== action.payload.id);
      }
    },
  },
});
export default eventSlice.reducer;
export const { addFavouriteEvent, isFavEvent } = eventSlice.actions;
