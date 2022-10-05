import React from "react";
import Header from "../Header/Header";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Attorneys from "./Attorneys";
import AttorneyProvider from "../Context/AttorneyContext";

function AttorneyBody() {
  return (
    <div>
      <AttorneyProvider>
        <Header />
        <Attorneys />
        <ContactForm />
        <Footer />
      </AttorneyProvider>
    </div>
  );
}

export default AttorneyBody;
