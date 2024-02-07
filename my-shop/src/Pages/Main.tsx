import React from "react";
import Nav from "../components/Nav";
import MainScreen from "../components/MainScreen";
import { SliderContext, SliderProvider } from "../context/Slider";
import "../index.css";
import Profile from "./Profile";
const Main = () => {
  return (
    <SliderProvider>
      <SliderContext.Consumer>
        {(context) => {
          if (!context) {
            return null;
          }

          const { animate, visible } = context;

          return (
            <>
              <div
                className={`div ${animate ? "visible" : ""} ${
                  visible === true ? "hidden" : ""
                }`}
              >
                <Nav />
                <MainScreen size={45} />
              </div>
              <Profile />
            </>
          );
        }}
      </SliderContext.Consumer>
    </SliderProvider>
  );
};

export default Main;
