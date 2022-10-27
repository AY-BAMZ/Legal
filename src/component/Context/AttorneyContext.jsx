import React, { useState, createContext, useContext } from "react";

export const AttorneyContext = createContext();

const AttorneyProvider = props => {
  const [attorneys, setAttorneys] = useState([
    {
        id: "137834",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809200/Martin_F._Lipton_Jr_eoqbro.png",
      name: "Martin F. Lipton Jr.",
      practice: "Professional",
      position: "Senior Partner",
      about: `Martin F. Lipton Jr. is an associate in  lldel Law Corporate Department.
      
      Admitted: State Bar of California`,
      address: `Lipton@lldelaw.com`,
      publications: `Admitted: State Bar of California`,
      education: `J.D., University of Southern California, Gould School of Law, Order of the Coif, 1998

      B.A., University of California, Irvine, 1994`,
      pdf: "",
      vcard: "https://res.cloudinary.com/dfhr6mo4q/raw/upload/v1666889213/Martin_F__Lipton_Jr_xbeoww.vcf",
    },
    {
        id: "234763",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809198/Andrea_Denner_fsv3ou.jpg",
      name: "Andrea Denner",
      practice: `Antitrust and Competition
      `,
      position: "Partner",
      about: `Andrea Denner is an partner in  lldel Law Corporate Department.
      
      Investigations, Enforcement and Business Crime`,
      address: `denner@lldelaw.com`,
      publications: `law building
      11 October 2022
      New draft 11th Amendment to the Germany Competition Act`,
      education: ``,
      pdf: "",
      vcard: "https://res.cloudinary.com/dfhr6mo4q/raw/upload/v1666888179/Andrea_Denner_ke3hz8.vcf",
    },
    {
        id: "378473",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809198/Thomas_Levin_tqqyhg.jpg",
      name: "James Levin",
      practice: "Litigation",
      position: "Partner",
      about: `James Levin is an associate in  lldel Law Corporate Department.

      Admitted as solicitor, England and Wales, 2004`,
      address: `levin@lldelaw.com`,
      publications: `18 October 2021
      Podcast: What business needs to know about the EU’s Taxonomy Regulation and its`,
      education: `BA (Hons), Law, Downing College, Cambridge University, 2000`,
      pdf: "",
      vcard: "https://res.cloudinary.com/dfhr6mo4q/raw/upload/v1666889213/Thomas_J_Levin_olw5ss.vcf",
    },
    {
        id: "178234",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809198/Thomas_Englander_1_gacpkl.png",
      name: "Thomas Englander",
      practice: "Corporate",
      position: "Partner",
      about: `Law, Katholieke Universiteit Leuven, 1984`,
      address: `englander@lldelaw.com`,
      publications: `Dejonghe. W, Van de Voorde. W, 2001, "Mergers and Acquisitions in Belgium", Kluwer Law International, The Hague, London, Boston
      "European Counsel Mergers and Acquisitions Handbook", Chapter on Belgium, Millenium Edition: "From Bid to Closing", 2000
      "Vennootschapsrecht & Fiscaliteit", articles on mergers and acquisitions in several editions`,
      education: `University of Pennsylvania, B.S. 1952, Economics
      New York University School of Law, LL.B. 1955`,
      pdf: "",
      vcard: "https://res.cloudinary.com/dfhr6mo4q/raw/upload/v1666889213/Thomas_Englander_h5pv1b.vcf",
    },
  ]);
  return (
    <AttorneyContext.Provider value={{ attorneys, setAttorneys }}>
      {props.children}
    </AttorneyContext.Provider>
  );
};
export const useAttorneyContext = () => {
      const context = useContext(AttorneyContext);
      if (!context) throw new Error('useAttorneyContext must be used in AttorneyProvider');
      return context;
  }

export default AttorneyProvider;
