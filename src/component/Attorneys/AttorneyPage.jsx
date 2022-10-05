import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AttorneyPageBody from "./AttorneyPageBody";
import { useParams } from "react-router-dom";
import { useAttorrney } from "./useAttorrney";

function AttorneyPage() {
  let { id } = useParams();
  let { getAttorney } = useAttorrney();
  // console.log("getAttorney :>> ", getAttorney());
  return (
    <div>
      <Header />
      <AttorneyPageBody {...getAttorney(id)} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AttorneyPage;
