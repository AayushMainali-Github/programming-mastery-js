import React from "react";
import Laptop from "../../Assets/bg.png";
import "./Home.css";
import Item from "./Components/Item";
import Introduction from "../../Assets/Home/introduction.png";
import Variables from "../../Assets/Home/variables.png";
import Datatypes from "../../Assets/Home/datatypes.png";
import Comments from "../../Assets/Home/comments.png";
import Operators from "../../Assets/Home/operators.png";
import StringMethods from "../../Assets/Home/stringmethods.png";
import NumberMethods from "../../Assets/Home/numbermethods.png";
import DateAndTime from "../../Assets/Home/dateandtime.png";
import Functions from "../../Assets/Home/functions.png";
import Math from "../../Assets/Home/math.png";
import ConditionalStatements from "../../Assets/Home/conditionalstatements.png";
import Loops from "../../Assets/Home/loops.png";
import Arrays from "../../Assets/Home/arrays.png";
import ArrayMethods from "../../Assets/Home/arraymethods.png";
import Objects from "../../Assets/Home/objects.png";
import Events from "../../Assets/Home/events.png";

const Home = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Learn the language of the web</div>
        <div className="desc">
          JavaScript is the world's most popular programming language. It's the language of the web, and it's everywhere. You can use it to add interactivity to web pages, create
          mobile apps, build games, and more.
        </div>
      </div>
      <div className="header">Fundamentals</div>
      <div className="items">
        <Item image={Introduction} title="Introduction" link="introduction" />
        <Item image={Variables} title="Variables" link="variables" />
        <Item image={Datatypes} title="Data Types" link="datatypes" />
        <Item image={Comments} title="Comments" link="comments" />
        <Item image={Operators} title="Operators" link="operators" />
        <Item image={StringMethods} title="String Methods" link="stringmethods" />
        <Item image={NumberMethods} title="Number Methods" link="numbermethods" />
        <Item image={DateAndTime} title="Date And Time" link="dateandtime" />
        <Item image={Functions} title="Functions" link="functions" />
        <Item image={Math} title="Math" link="math" />
        <Item image={ConditionalStatements} title="Conditional Statements" link="conditionalstatements" />
        <Item image={Loops} title="Loops" link="loops" />
        <Item image={Arrays} title="Arrays" link="arrays" />
        <Item image={ArrayMethods} title="Array Methods" link="arraymethods" />
        <Item image={Objects} title="Objects" link="objects" />
        <Item image={Events} title="Events" link="events" />
      </div>
    </div>
  );
};

export default Home;
