import React from "react";
import group1 from "../assets/Vector25.png";
import group2 from "../assets/Group2.png";
import "../index.css";

interface MainScreenProps {}

interface ImageProps {
  //Моя типизация
  src: string;
  rotate?: number;
  flipVertical?: boolean;
  className: string;
}

const Image: React.FC<ImageProps> = ({
  //компонент моего image
  src,
  className = "",
}) => {
  return <img src={src} alt="" className={className} />;
};

const MainScreen: React.FC<MainScreenProps> = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-start gap-[10px]">
        <Image
          src={group2}
          rotate={180}
          flipVertical
          className="rotate-180 scale-y-[-1]"
        />
        <Image src={group1} className="rotate-180 " />
        <Image src={group2} rotate={180} flipVertical className="rotate-180" />
      </div>
      <div className="flex flex-col">
        <h1 className="h1 w-[350px]">One button to stable all your funds</h1>
        <p className="p top-[40px] relative flex justify-center">
          (Connect your wallet to continue)
        </p>
      </div>
      <div className="flex flex-col items-end gap-[10px]">
        <Image src={group2} className={""} />
        <Image src={group1} flipVertical className={""} />
        <Image src={group2} rotate={180} className="rotate-180 scale-x-[-1]" />
      </div>
    </div>
  );
};

export default MainScreen;
