import {
  RiAliensLine,
  RiAwardLine,
  RiBearSmileLine,
  RiBlueskyLine,
  RiCompass3Line,
  RiEmojiStickerLine,
  RiGhostLine,
  RiInfraredThermometerLine,
  RiLiveLine,
  RiMovie2Line,
  RiMovieLine,
  RiSlideshow2Line,
  RiSlideshow3Line,
  RiSpyLine,
  RiStarLine,
  RiTimeLine,
  RiTvLine,
} from "react-icons/ri";

export const tgUrl = "https://1473-5-187-75-31.ngrok-free.app";

const filterGenres = [
  { text: "Все", value: null, icon: RiMovie2Line },
  { text: "Боевик", value: 11, icon: RiInfraredThermometerLine },
  { text: "Комедия", value: 13, icon: RiEmojiStickerLine },
  { text: "Детектив", value: 5, icon: RiSpyLine },
  { text: "Мультфильм", value: 18, icon: RiBearSmileLine },
  { text: "Ужасы", value: 17, icon: RiGhostLine },
  { text: "Фантастика", value: 6, icon: RiAliensLine },
  { text: "Мелодрама", value: 4, icon: RiBlueskyLine },
  { text: "Приключения", value: 7, icon: RiCompass3Line },
];

const filterCountries = [
  { text: "Все", value: null },
  { text: "США", value: 1 },
  { text: "Россия", value: 34 },
  { text: "СССР", value: 33 },
  { text: "Франция", value: 3 },
  { text: "Великобритания", value: 5 },
  { text: "Германия", value: 9 },
  { text: "Япония", value: 16 },
  { text: "Канада", value: 14 },
];

const filterTypes = [
  { text: "Все", value: "ALL", icon: RiLiveLine },
  { text: "Фильмы", value: "FILM", icon: RiMovieLine },
  { text: "ТВ Шоу", value: "TV_SHOW", icon: RiTvLine },
  { text: "Сериалы", value: "TV_SERIES", icon: RiSlideshow2Line },
  { text: "Мини-сериалы", value: "MINI_SERIES", icon: RiSlideshow3Line },
];

const filterOrder = [
  { text: "Рейтинг", value: "RATING", icon: RiStarLine },
  { text: "Год выхода", value: "YEAR", icon: RiTimeLine },
  { text: "Кол-во голосов", value: "NUM_VOTE", icon: RiAwardLine },
];

export const filters = [
  filterGenres,
  filterCountries,
  filterTypes,
  filterOrder,
];
