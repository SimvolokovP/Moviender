import { useNavigate } from "react-router-dom";
import "./StepControl.css";
import { IoMdArrowDropright } from "react-icons/io";

const StepControl = ({ step, setStep, filters }) => {
  const navigate = useNavigate();

  return (
    <div className="main-page__control">
      {step === 0 && (
        <button className="common-btn" onClick={() => setStep(1)}>
          Старт
        </button>
      )}
      {step > 0 && (
        <div>
          <button
            className="common-btn"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Назад
          </button>
          <button
            className="btn-arrow"
            onClick={() =>
              step === filters.length
                ? navigate("/movies")
                : setStep((prev) => prev + 1)
            }
          >
            <IoMdArrowDropright size={28} />
          </button>
        </div>
      )}
    </div>
  );
};

export default StepControl;
