import { InfinitySpin } from "react-loader-spinner";
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <InfinitySpin color="#FFF" />
    </div>
  );
};

export default LoadingScreen;