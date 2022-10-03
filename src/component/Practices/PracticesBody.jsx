import React, { useState } from "react";
import Antitrust from "./Antitrust";
import Corporate from "./Corporate";
import ExecutiveCompensation from "./ExecutiveCompensation";
import "./Index.css";
import Litigation from "./Litigation";
import RealEstate from "./RealEstate";
import RestructuringFinance from "./RestructuringFinance";
import Tax from "./Tax";
import HamburgerMenu from "../Icons/hamburgerMenu.svg";
import CloseTheMenu from "../Icons/close.svg";

function PracticesBody() {
  const [menu, setMenu] = useState(1);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div className="practicesBody">
      <div className="container">
        <div className="navbar">
          <div className="navLinks">
            <ul>
              <li
                onClick={() => setMenu(1)}
                className={menu === 1 ? "active" : "normal"}
              >
                Corporate
              </li>
              <li
                onClick={() => setMenu(2)}
                className={menu === 2 ? "active" : "normal"}
              >
                Litigation
              </li>
              <li
                onClick={() => setMenu(3)}
                className={menu === 3 ? "active" : "normal"}
              >
                Restructuring and Finance
              </li>
              <li
                onClick={() => setMenu(4)}
                className={menu === 4 ? "active" : "normal"}
              >
                Tax
              </li>
              <li
                onClick={() => setMenu(5)}
                className={menu === 5 ? "active" : "normal"}
              >
                Executive Compensation and Benefits
              </li>
              <li
                onClick={() => setMenu(6)}
                className={menu === 6 ? "active" : "normal"}
              >
                Antitrust
              </li>
              <li
                onClick={() => setMenu(7)}
                className={menu === 7 ? "active" : "normal"}
              >
                Real Estate M&A
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
              {menu === 1 && <div>Corporate </div>}
              {menu === 2 && <div> Litigation </div>}
              {menu === 3 && <div> RestructuringFinance </div>}
              {menu === 4 && <div> Tax </div>}
              {menu === 5 && <div> ExecutiveCompensation </div>}
              {menu === 6 && <div> Antitrust </div>}
              {menu === 7 && <div> RealEstate </div>}
            </div>
            </div>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
              <li
                onClick={() => {
                  setMenu(1);
                  closeMenu();
                }}
                className={menu === 1 ? "active" : "normal"}
              >
                Corporate
              </li>
              <li
                onClick={() => {
                  setMenu(2);
                  closeMenu();
                }}
                className={menu === 2 ? "active" : "normal"}
              >
                Litigation
              </li>
              <li
                onClick={() => {
                  setMenu(3);
                  closeMenu();
                }}
                className={menu === 3 ? "active" : "normal"}
              >
                Restructuring and Finance
              </li>
              <li
                onClick={() => {
                  setMenu(4);
                  closeMenu();
                }}
                className={menu === 4 ? "active" : "normal"}
              >
                Tax
              </li>
              <li
                onClick={() => {
                  setMenu(5);
                  closeMenu();
                }}
                className={menu === 5 ? "active" : "normal"}
              >
                Executive Compensation and Benefits
              </li>
              <li
                onClick={() => {
                  setMenu(6);
                  closeMenu();
                }}
                className={menu === 6 ? "active" : "normal"}
              >
                Antitrust
              </li>
              <li
                onClick={() => {
                  setMenu(7);
                  closeMenu();
                }}
                className={menu === 7 ? "active" : "normal"}
              >
                Real Estate M&A
              </li>
            </ul>
          </div>
        </div>

        <div className="body">
          {menu === 1 && <Corporate />}
          {menu === 2 && <Litigation />}
          {menu === 3 && <RestructuringFinance />}
          {menu === 4 && <Tax />}
          {menu === 5 && <ExecutiveCompensation />}
          {menu === 6 && <Antitrust />}
          {menu === 7 && <RealEstate />}
        </div>
      </div>
    </div>
  );
}

export default PracticesBody;
