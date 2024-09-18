import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Screens/Home/Home";
import Introduction from "../Screens/Introduction/Introduction";
import Variables from "../Screens/Variables/Variables";
import Datatypes from "../Screens/DataTypes/Datatypes";
import Comments from "../Screens/Comments/Comments";
import Operators from "../Screens/Operators/Operators";
import StringMethods from "../Screens/StringMethods/StringMethods";
import NumberMethods from "../Screens/NumberMethods/NumberMethods";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/datatypes" element={<Datatypes />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/operators" element={<Operators />} />
          <Route path="/stringmethods" element={<StringMethods />} />
          <Route path="/numbermethods" element={<NumberMethods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
