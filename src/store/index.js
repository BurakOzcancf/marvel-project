import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./character-slice";
import comicSlice from "./comic-slice";
import eventSlice from "./event-slice";
import creatorSlice from "./creator-slice";
import serieSlice from "./serie-slice";

const store = configureStore({
  reducer: {
    character: characterSlice,
    comic: comicSlice,
    event: eventSlice,
    creator: creatorSlice,
    serie: serieSlice,
  },
});
export default store;
