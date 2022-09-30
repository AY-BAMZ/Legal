import React from "react";
import Footer from "../Footer/Footer";
import HeaderBody from "../Header/HeaderBody";
import HomeBody from "./HomeBody";
import "./Index.css";

function Home() {
  return (
    <div className="home">
      <div className="homeBackground">
        <HeaderBody />
        <HomeBody />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
