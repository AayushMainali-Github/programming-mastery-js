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
import DateAndTime from "../Screens/DateAndTime/DateAndTime";
import Functions from "../Screens/Functions/Functions";
import Arrays from "../Screens/Arrays/Arrays";
import ConditionalStatements from "../Screens/CondtionalStatements/ConditionalStatements";
import Loops from "../Screens/Loops/Loops";
import ArrayMethods from "../Screens/ArrayMethods/ArrayMethods";
import Math from "../Screens/Math/Math";
import Objects from "../Screens/Objects/Objects";
import Events from "../Screens/Events/Events";
import Error from "../Screens/Error/Error";
import Soon from "../Screens/Soon/Soon";
import DomManipulation from "../Screens/DomManipulation/DomManipulation";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/datatypes" element={<Datatypes />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/operators" element={<Operators />} />
          <Route path="/stringmethods" element={<StringMethods />} />
          <Route path="/numbermethods" element={<NumberMethods />} />
          <Route path="/dateandtime" element={<DateAndTime />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/math" element={<Math />} />
          <Route path="/conditionalstatements" element={<ConditionalStatements />} />
          <Route path="/loops" element={<Loops />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/arraymethods" element={<ArrayMethods />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dommanipulation" element={<DomManipulation />} />
          <Route path="/soon" element={<Soon />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
