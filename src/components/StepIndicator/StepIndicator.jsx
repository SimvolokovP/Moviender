import "./StepIndicator.css";

const StepIndicator = ({ currentStep, filtersArray }) => {
  return (
    <div className="step-indicator">
      {filtersArray.map((step, index) => (
        <div
          key={index}
          className={`step-circle ${currentStep === index + 1 ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;
