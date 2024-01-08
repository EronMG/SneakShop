import React from "react";
import Nav from "../components/Nav";
import MainScreen from "../components/MainScreen";

const Main = () => {
  return (
    <>
      <Nav />
      <MainScreen from={1} to={24} />
    </>
  );
};

export default Main;
