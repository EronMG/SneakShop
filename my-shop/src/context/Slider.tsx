import React, { useState, createContext, ReactNode } from "react";

interface SliderData {
  id: string;
  value: number;
  imageSrc: string;
}

interface SliderContextType {
  isAnySliderAboveZero: boolean;
  setAnySliderAboveZero: (value: boolean) => void;
  activeSlider: SliderData | null;
  setActiveSlider: (sliderData: SliderData | null) => void;
  animate: boolean;
  setAnimate: (value: boolean) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const SliderContext = createContext<SliderContextType | undefined>(
  undefined
);

export const SliderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAnySliderAboveZero, setAnySliderAboveZero] =
    useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [activeSlider, setActiveSlider] = useState<SliderData | null>(null);

  return (
    <SliderContext.Provider
      value={{
        isAnySliderAboveZero,
        setAnySliderAboveZero,
        activeSlider,
        setActiveSlider,
        animate,
        setAnimate,
        visible,
        setVisible,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};
