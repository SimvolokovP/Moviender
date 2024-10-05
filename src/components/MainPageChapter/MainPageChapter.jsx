import { useTg } from "../../hooks/useTg";
import "./MainPageChapter.css";

const MainPageChapter = ({ step }) => {
  const { user } = useTg();

  return (
    <div className="main-page__chapter">
      {step === 0 && (
        <>
          <div>Привет, {user && user?.username}</div>
          <span>Давай подберем фильмы для тебя!</span>
        </>
      )}
      {step === 1 && <div>Начнем с жанра!</div>}
      {step === 2 && <div>Страна-производитель фильма: </div>}
      {step === 3 && <div>Тип фильма: </div>}
      {step === 4 && <div>Сортировка по: </div>}
    </div>
  );
};

export default MainPageChapter;
