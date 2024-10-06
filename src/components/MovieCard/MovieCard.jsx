import { useDispatch, useSelector } from "react-redux";
import "./MovieCard.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { addLikedMovie } from "../../store/likedMovies";

const MovieCard = ({ movie, targetMovies, setTargetMovies }) => {
  const dispatch = useDispatch();
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront =
    movie?.kinopoiskId === targetMovies[targetMovies.length - 1]?.kinopoiskId;

  const handleDragEnd = () => {
    const currentPos = x.get();
    if (Math.abs(currentPos) > 40) {
      setTargetMovies(
        [...targetMovies].filter(
          (oneMovie) => oneMovie?.kinopoiskId !== movie?.kinopoiskId
        )
      );
    }

    if (currentPos > 40) {
      dispatch(addLikedMovie(movie));
    }
  };

  return (
    <>
      {isFront && <h3 className="movie-title">{movie?.nameRu}</h3>}
      <motion.div className="movie-card">
        <motion.img
          loading="lazy"
          src={movie?.posterUrl}
          alt={movie?.nameRu}
          className="movie-image"
          style={{
            gridRow: 1,
            gridColumn: 1,
            x,
            opacity,
            transition: "0.125s transform",
            boxShadow: isFront
              ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
              : undefined,
          }}
          animate={{
            scale: isFront ? 1 : 0.98,
          }}
          drag={isFront ? "x" : false}
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragEnd={handleDragEnd}
        />
      </motion.div>
    </>
  );
};
export default MovieCard;
