import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/moviesSlice";
import "./MoviesPage.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import MoviesService from "../../api/api";

const MoviesPage = () => {
  const { genres, countries, type, order, page } = useSelector(
    (state) => state.filters
  );
  const { error, isLoading, movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ genres, countries, type, order, page }));
    console.log(movies);
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="page">
      {error && <ErrorScreen errorText={error} />}
      {isLoading && <LoadingScreen />}
      <MoviesContainer movies={movies} />
    </div>
  );
};

export default MoviesPage;
