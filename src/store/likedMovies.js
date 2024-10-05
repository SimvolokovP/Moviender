import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const likedMoviesSlice = createSlice({
  name: "likedMovies",
  initialState,
  reducers: {
    addLikedMovie(state, action) {
      state.movies.push(action.payload);
    },
  },
});

export default likedMoviesSlice.reducer;
export const { addLikedMovie } = likedMoviesSlice.actions;
