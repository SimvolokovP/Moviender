import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../api/api";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (filter, { rejectWithValue }) => {
    try {
      const response = await MoviesService.getMovies(filter);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении фильмов:", error.code);
      return rejectWithValue(error.code);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMovies: (state) => {
      state.movies = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
