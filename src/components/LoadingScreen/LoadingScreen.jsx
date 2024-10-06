import { InfinitySpin } from "react-loader-spinner";
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <InfinitySpin color="var(--tg-theme-text-color)" />
    </div>
  );
};

export default LoadingScreen;