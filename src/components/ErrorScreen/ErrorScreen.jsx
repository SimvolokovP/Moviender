import { RiAlertLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import './ErrorScreen.css';

const ErrorScreen = ({ errorText }) => {
  return (
    <div className="error-screen">
      <RiAlertLine size={36} />
      <div>Мы приносим извинения, произошла ошибка({errorText})</div>
      <Link to={"/"} className="common-btn">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ErrorScreen;
