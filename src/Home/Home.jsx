import React from "react";
import Card from "./Card/Card";
// import { Link } from "react-router-dom";
import Header from "./Header/Header";
import "./home.css"
function Home() {
  return (
    <div className="homePage">
      <Header />
      <Card/>
    </div>
  );
}

export default Home;
