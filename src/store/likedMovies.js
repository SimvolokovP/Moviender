import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedMovies: [],
};

const likedMoviesSlice = createSlice({
  name: "likedMovies",
  initialState,
  reducers: {
    addLikedMovie(state, action) {
      state.likedMovies.push(action.payload);
    },
  },
});

export default likedMoviesSlice.reducer;
export const { addLikedMovie } = likedMoviesSlice.actions;
