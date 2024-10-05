import axios from "axios";

export default class MoviesService {
  static async getMovies(filter) {
    const resp = await axios.get(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films",
      {
        params: {
          genres: filter.genres,
          countries: filter.countries,
          order: filter.order,
          type: filter.type,
          ratingFrom: 0,
          ratingTo: 10,
          yearFrom: 1950,
          yearTo: 2024,
          page: filter.page,
        },
        headers: {
          "X-API-KEY": "6438a7f1-b759-4b04-b44b-fe0140e9e70e",
        },
      }
    );
    return resp;
  }
  static async getCountries() {
    const resp = await axios.get(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/filters",
      {
        headers: {
          "X-API-KEY": "6438a7f1-b759-4b04-b44b-fe0140e9e70e",
        },
      }
    );
    return resp.data.countries;
  }

  static async getGenres() {
    const resp = await axios.get(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/filters",
      {
        headers: {
          "X-API-KEY": "6438a7f1-b759-4b04-b44b-fe0140e9e70e",
        },
      }
    );
    return resp.data.genres;
  }
}
