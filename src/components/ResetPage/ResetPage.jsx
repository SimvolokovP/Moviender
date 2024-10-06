import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../../store/filtersSlice";
import { clearMovies, fetchMovies } from "../../store/moviesSlice";
import { useNavigate } from "react-router-dom";
import "./ResetPage.css";

const ResetPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genres, countries, type, order, page } = useSelector(
    (state) => state.filters
  );

  const fetchNewMovies = async () => {
    await dispatch(addPage());
    console.log(page + 1);
    dispatch(fetchMovies({ genres, countries, type, order, page: page + 1 }));
  };

  const resetFilters = () => {
    dispatch(clearMovies());
    navigate("/");
  };

  return (
    <div className="reset-page">
      {page + 1 < 6 && (
        <button className={"common-btn"} onClick={fetchNewMovies}>
          Загрузить еще
        </button>
      )}
      <button className={"common-btn"} onClick={resetFilters}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default ResetPage;
