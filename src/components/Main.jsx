import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Hiphop from "./Hiphop";
import Rap from "./Rap";
import RnB from "./RnB";
import Pop from "./Pop";
import Reggae from "./Reggae";
import Soul from "./Soul";

const Main = () => {
  return (
    <Routes>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/Hiphop" element={<Hiphop />} />
      <Route exact path="/Rap" element={<Rap />} />
      <Route exact path="/RnB" element={<RnB />} />
      <Route exact path="/Pop" element={<Pop />} />
      <Route exact path="/Reggae" element={<Reggae />} />
      <Route exact path="/Soul" element={<Soul />} />
    </Routes>
  );
};

export default Main;
