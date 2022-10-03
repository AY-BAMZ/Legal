import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutBody from "./AboutBody";
import SectionTwo from "./SectionTwo";

function About() {
  return (
    <div>
      <Header />
      <AboutBody />
      <SectionTwo />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default About;
