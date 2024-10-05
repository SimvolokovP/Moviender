import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import moviesReducer from "./moviesSlice";
import likedMoviesReducer from "./likedMovies";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    movies: moviesReducer,
    likedMovies: likedMoviesReducer,
  },
});

export default store;
