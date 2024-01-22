import React from "react";
import Nav from "../components/Nav";
import MainScreen from "../components/MainScreen";
import { SliderContext, SliderProvider } from "../context/Slider";
import "../index.css";
const Main = () => {
  return (
    <SliderProvider>
      <SliderContext.Consumer>
        {(context) => {
          if (!context) {
            return null;
          }

          const { animate } = context;

          return (
            <div className={`div ${animate ? "visible" : ""}`}>
              <Nav />
              <MainScreen size={45} />
            </div>
          );
        }}
      </SliderContext.Consumer>
    </SliderProvider>
  );
};

export default Main;
