import { configureStore } from "@reduxjs/toolkit";
import sliceMoves from "./slices/slice-moves";
import actionMoviesSlice from "./slices/actionMoviesSlice";
import adventureMoviesSlice from "./slices/adventureMoviesSlice";
import horrorMoviesSlice from "./slices/horrorMoviesSlice";
import dramaMoviesSlice from "./slices/dramaMoviesSlice";
import movieIdSlice from "./slices/movieIdSlice";

export const store = configureStore({
  reducer: {
    movies: sliceMoves,
    action: actionMoviesSlice,
    adventure: adventureMoviesSlice,
    horror: horrorMoviesSlice,
    drama: dramaMoviesSlice,
    moiveId: movieIdSlice,
  },
});
