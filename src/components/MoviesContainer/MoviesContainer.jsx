import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesContainer.css";
import ResetPage from "../ResetPage/ResetPage";

const MoviesContainer = ({ movies }) => {
  const [targetMovies, setTargetMovies] = useState([]);

  useEffect(() => {
    setTargetMovies(movies?.items);
  }, [movies]);

  return (
    <div className="movies-container">
      {targetMovies?.length ? (
        targetMovies.map((movie) => (
          <MovieCard
            key={movie.kinopoiskId}
            targetMovies={targetMovies}
            setTargetMovies={setTargetMovies}
            movie={movie}
          />
        ))
      ) : (
        <ResetPage />
      )}
    </div>
  );
};

export default MoviesContainer;
