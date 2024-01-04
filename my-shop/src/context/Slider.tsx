// SliderContext.tsx

import React, { useState, createContext, ReactNode } from "react";

interface SliderContextType {
  isAnySliderAboveZero: boolean;
  setAnySliderAboveZero: (value: boolean) => void;
}

export const SliderContext = createContext<SliderContextType | undefined>(
  undefined
);

export const SliderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAnySliderAboveZero, setAnySliderAboveZero] =
    useState<boolean>(false);

  return (
    <SliderContext.Provider
      value={{ isAnySliderAboveZero, setAnySliderAboveZero }}
    >
      {children}
    </SliderContext.Provider>
  );
};
