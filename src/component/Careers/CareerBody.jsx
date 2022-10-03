import React, { useState } from "react";
import "./Index.css";
import HamburgerMenu from "../Icons/hamburgerMenu.svg";
import CloseTheMenu from "../Icons/close.svg";
import Associates from "./Associates";
import SummerAssociates from "./SummerAssociates";
import Paralegals from "./Paralegals";
import AdministrativeStaff from "./AdministrativeStaff";
import CareerLanding from "./CareerLanding";

function CareerBody() {
  const [menu, setMenu] = useState(1);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div className="careerBody">
      <div className="container">
        <div className="navbar">
          <div className="navLinks">
            <ul>
              <li
                onClick={() => setMenu(2)}
                className={menu === 2 ? "active" : "normal"}
              >
                Associates
              </li>
              <li
                onClick={() => setMenu(3)}
                className={menu === 3 ? "active" : "normal"}
              >
                Summer Associates
              </li>
              <li
                onClick={() => setMenu(4)}
                className={menu === 4 ? "active" : "normal"}
              >
                Paralegals
              </li>
              <li
                onClick={() => setMenu(5)}
                className={menu === 5 ? "active" : "normal"}
              >
                Administrative Staff
              </li>
            </ul>
          </div>
          <div className="mobileNav">
            <div className="nav">
              <div className="menu" onClick={handleToggle}>
                {navbarOpen ? (
                  <img src={CloseTheMenu} alt="" />
                ) : (
                  <img src={HamburgerMenu} alt="" />
                )}
              </div>

              <div className="activetab">
                \ {menu === 2 && <div> Associates </div>}
                {menu === 3 && <div> Summer Associates </div>}
                {menu === 4 && <div> Paralegals </div>}
                {menu === 5 && <div> Administrative Staff </div>}
              </div>
            </div>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
              <li
                onClick={() => {
                  setMenu(2);
                  closeMenu();
                }}
                className={menu === 2 ? "active" : "normal"}
              >
                Associates
              </li>
              <li
                onClick={() => {
                  setMenu(3);
                  closeMenu();
                }}
                className={menu === 3 ? "active" : "normal"}
              >
                Summer Associates
              </li>
              <li
                onClick={() => {
                  setMenu(4);
                  closeMenu();
                }}
                className={menu === 4 ? "active" : "normal"}
              >
                Paralegals
              </li>
              <li
                onClick={() => {
                  setMenu(5);
                  closeMenu();
                }}
                className={menu === 5 ? "active" : "normal"}
              >
                Administrative Staff
              </li>
            </ul>
          </div>
        </div>

        <div className="body">
          {menu === 1 && <CareerLanding />}
          {menu === 2 && <Associates />}
          {menu === 3 && <SummerAssociates />}
          {menu === 4 && <Paralegals />}
          {menu === 5 && <AdministrativeStaff />}
        </div>
      </div>
    </div>
  );
}

export default CareerBody;
