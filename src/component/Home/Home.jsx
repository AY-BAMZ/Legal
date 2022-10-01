import React from "react";
import ContactForm from "../ContactForm/ContactForm";
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
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
