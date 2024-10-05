import { useEffect, useState } from "react";
import FiltersTab from "../../components/FiltersTab/FiltersTab";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountries,
  setGenres,
  setOrder,
  setType,
} from "../../store/filtersSlice";
import StepControl from "../../components/StepControl/StepControl";
import MainPageChapter from "../../components/MainPageChapter/MainPageChapter";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import { filters } from "../../utils/utils";
import MoviesService from "../../api/api";

const MainPage = () => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const { genres, countries, type, order } = useSelector(
    (state) => state.filters
  );

  return (
    <div className="page main-page">
      <StepIndicator filtersArray={filters} currentStep={step} />
      <MainPageChapter step={step} />
      {step === 1 && (
        <FiltersTab
          currentValue={genres}
          filtersItems={filters[0]}
          changeTab={(value) => dispatch(setGenres(value))}
        />
      )}
      {step === 2 && (
        <FiltersTab
          currentValue={countries}
          filtersItems={filters[1]}
          changeTab={(value) => dispatch(setCountries(value))}
        />
      )}
      {step === 3 && (
        <FiltersTab
          currentValue={type}
          filtersItems={filters[2]}
          changeTab={(value) => dispatch(setType(value))}
        />
      )}
      {step === 4 && (
        <FiltersTab
          currentValue={order}
          filtersItems={filters[3]}
          changeTab={(value) => dispatch(setOrder(value))}
        />
      )}
      <StepControl filters={filters} setStep={setStep} step={step} />
    </div>
  );
};

export default MainPage;
