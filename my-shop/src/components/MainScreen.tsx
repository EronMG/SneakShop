import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

interface MainScreenProps {
  size: number;
}

const Block = ({ size, className }: any) => {
  const generateBlocks = React.useMemo(() => {
    const center = Math.ceil(size / 2);
    return Array.from({ length: size + 2 }, (_, index) => (
      <div
        key={index}
        className={`block block${
          index <= center ? index : center - (index - center)
        } ${index === center ? "block-center" : ""}`}
      ></div>
    ));
  }, [size]);

  return <div className={className}>{generateBlocks}</div>;
};

const MainScreen: React.FC<MainScreenProps> = ({ size }) => {
  const [animate, setAnimate] = React.useState(false);

  const handleClick = () => {
    // Set animate to true
    setAnimate(true);

    // Delay the navigation by 2 seconds
    setTimeout(() => {
      // Navigate to "/profile" after 2 seconds
      window.location.href = "/profile";
    }, 1000);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex overflow-hidden justify-between items-center ${
        animate && "blocks-animate"
      }`}
    >
      <Block
        size={size}
        className="main flex flex-col items-start gap-[10px]"
      />

      <div className="flex flex-col">
        <h1 className="h1 w-[320px]">
          <span className={animate ? "visible" : ""}>One</span>{" "}
          <span className={animate ? "visible" : ""}>button</span>{" "}
          <span className={animate ? "visible" : ""}>to</span>{" "}
          <span>stable</span>{" "}
          <span className={animate ? "visible" : ""}>all</span>{" "}
          <span className={animate ? "visible" : ""}>your</span>{" "}
          <span className={animate ? "visible" : ""}>funds</span>
        </h1>
        <p
          className={`p top-[40px] relative flex justify-center ${
            animate && "opacity-0"
          }`}
        >
          (Connect your wallet to continue)
        </p>
      </div>

      <Block
        size={size}
        className="main flex flex-col items-start gap-[10px] rotate-180"
      />
    </div>
  );
};

export default MainScreen;
