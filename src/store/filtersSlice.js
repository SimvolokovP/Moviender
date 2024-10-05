import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  genres: null,
  countries: null,
  type: "ALL",
  order: "RATING",
  ratingFrom: 0,
  ratingTo: 10,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload;
    },
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
    addPage(state) {
      state.page++;
    },
  },
});

export default filtersSlice.reducer;
export const { setCountries, setGenres, setType, setOrder, addPage } =
  filtersSlice.actions;
