import MainPage from "../pages/MainPage/MainPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

export const appRoutes = [
  { path: "/", isIndex: true, component: MainPage },
  { path: "/movies", isIndex: false, component: MoviesPage },
];
