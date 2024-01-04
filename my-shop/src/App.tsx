import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
