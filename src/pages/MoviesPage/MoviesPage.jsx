import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/moviesSlice";
import "./MoviesPage.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import { useTg } from "../../hooks/useTg";
import { tgUrl } from "../../utils/utils";

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);

  const { genres, countries, type, order, page } = useSelector(
    (state) => state.filters
  );
  const { error, isLoading, movies } = useSelector((state) => state.movies);
  const { likedMovies } = useSelector((state) => state.likedMovies);
  const dispatch = useDispatch();
  const { tg, queryId } = useTg();

  useEffect(() => {
    if (likedMovies.length === 0) {
      tg.MainButton.hide();
    } else {
      console.log("show");
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Напечатать ${likedMovies.length} фильмов`,
      });
    }
  }, [likedMovies]);

  useEffect(() => {
    dispatch(fetchMovies({ genres, countries, type, order, page }));
  }, []);

  const onSendData = useCallback(async () => {
    setLoading(true);
    const data = {
      likedMovies,
    };
    try {
      const response = await fetch(`${tgUrl}/web-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  return (
    <div className="page">
      {error && <ErrorScreen errorText={error} />}
      {isLoading && <LoadingScreen />}
      {loading && <LoadingScreen />}
      <MoviesContainer movies={movies} />
    </div>
  );
};

export default MoviesPage;
