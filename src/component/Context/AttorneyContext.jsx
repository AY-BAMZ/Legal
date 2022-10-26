import React, { useState, createContext, useContext } from "react";

export const AttorneyContext = createContext();

const AttorneyProvider = props => {
  const [attorneys, setAttorneys] = useState([
    {
        id: "137834",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809200/Martin_F._Lipton_Jr_eoqbro.png",
      name: "Martin F. Lipton Jr.",
      practice: "Litigation",
      position: "Partner",
      about: `Martin F. Lipton Jr. is an associate in  lldel Law Corporate Department.
      
Ms. Abdel-Malek received her B.S. summa cum laude from the Wharton School at the University of Pennsylvania in 2014.  She received her J.D. cum laude from Harvard Law School in 2019, where she served as an Executive Editor of the Harvard Law Review.

Prior to joining the firm, Ms. Abdel-Malek worked as an analyst in the hedge fund division of The Blackstone Group.`,
      address: `Lipton@lldelaw.com`,
      publications: `The Corporate Governance Review, U.S. chapter, Law Business Research, London, Twelfth ed. 2022.

The ESG/TSR Activist “Pincer Attack”, in Harvard Law School Forum on Corporate Governance, January 26, 2021.`,
      education: `University of Pennsylvania, B.S. 2014, summa cum laude
Harvard Law School, J.D. 2019, cum laude (Executive Editor, Harvard Law Review)`,
      pdf: "",
      vcard: "",
    },
    {
        id: "234763",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809198/Andrea_Denner_fsv3ou.jpg",
      name: "Andrea Denner",
      practice: "Litigation",
      position: "Partner",
      about: `Andrea Denner is an associate in  lldel Law Corporate Department.

Ms. Abdel-Malek received her B.S. summa cum laude from the Wharton School at the University of Pennsylvania in 2014.  She received her J.D. cum laude from Harvard Law School in 2019, where she served as an Executive Editor of the Harvard Law Review.

Prior to joining the firm, Ms. Abdel-Malek worked as an analyst in the hedge fund division of The Blackstone Group.`,
      address: `denner@lldelaw.com`,
      publications: `The Corporate Governance Review, U.S. chapter, Law Business Research, London, Twelfth ed. 2022.
The ESG/TSR Activist “Pincer Attack”, in Harvard Law School Forum on Corporate Governance, January 26, 2021.`,
      education: `University of Pennsylvania, B.S. 2014, summa cum laude

Harvard Law School, J.D. 2019, cum laude (Executive Editor, Harvard Law Review)`,
      pdf: "",
      vcard: "",
    },
    {
        id: "378473",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809198/Thomas_Levin_tqqyhg.jpg",
      name: "James Levin",
      practice: "Litigation",
      position: "Partner",
      about: `James Levin is an associate in  lldel Law Corporate Department.

Ms. Abdel-Malek received her B.S. summa cum laude from the Wharton School at the University of Pennsylvania in 2014.  She received her J.D. cum laude from Harvard Law School in 2019, where she served as an Executive Editor of the Harvard Law Review.

Prior to joining the firm, Ms. Abdel-Malek worked as an analyst in the hedge fund division of The Blackstone Group.`,
      address: `levin@lldelaw.com`,
      publications: `The Corporate Governance Review, U.S. chapter, Law Business Research, London, Twelfth ed. 2022.
The ESG/TSR Activist “Pincer Attack”, in Harvard Law School Forum on Corporate Governance, January 26, 2021.`,
      education: `University of Pennsylvania, B.S. 2014, summa cum laude
Harvard Law School, J.D. 2019, cum laude (Executive Editor, Harvard Law Review)`,
      pdf: "",
      vcard: "",
    },
    {
        id: "178234",
      image: "https://res.cloudinary.com/dfhr6mo4q/image/upload/v1666809198/Thomas_Englander_1_gacpkl.png",
      name: "Thomas Englander",
      practice: "Litigation",
      position: "Partner",
      about: `Thomas Englander is an associate in  lldel Law Corporate Department.

Ms. Abdel-Malek received her B.S. summa cum laude from the Wharton School at the University of Pennsylvania in 2014.  She received her J.D. cum laude from Harvard Law School in 2019, where she served as an Executive Editor of the Harvard Law Review.

Prior to joining the firm, Ms. Abdel-Malek worked as an analyst in the hedge fund division of The Blackstone Group.`,
      address: `englander@lldelaw.com`,
      publications: `The Corporate Governance Review, U.S. chapter, Law Business Research, London, Twelfth ed. 2022.
The ESG/TSR Activist “Pincer Attack”, in Harvard Law School Forum on Corporate Governance, January 26, 2021.`,
      education: `University of Pennsylvania, B.S. 2014, summa cum laude
Harvard Law School, J.D. 2019, cum laude (Executive Editor, Harvard Law Review)`,
      pdf: "",
      vcard: "",
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
