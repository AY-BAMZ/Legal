import React, { useState } from "react";
import HamburgerMenu from "../Icons/hamburgerMenu.svg";
import CloseTheMenu from "../Icons/close.svg";
import "./Index.css";
import AboutTheFirm from "./AboutTheFirm";
import ProBono from "./ProBono";
import Diversity from './Diversity';
import Sustainability from './Sustainability'


function TheFirmBody() {
    const [menu, setMenu] = useState(1);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div className='theFirmBody'>
        <div className="container">
        <div className="navbar">
          <div className="navLinks">
            <ul>
              <li
                onClick={() => setMenu(1)}
                className={menu === 1 ? "active" : "normal"}
              >
                About the Firm
              </li>
              <li
                onClick={() => setMenu(2)}
                className={menu === 2 ? "active" : "normal"}
              >
                Pro Bono
              </li>
              <li
                onClick={() => setMenu(3)}
                className={menu === 3 ? "active" : "normal"}
              >
                Diversity, Equity & Inclusion
              </li>
              <li
                onClick={() => setMenu(4)}
                className={menu === 4 ? "active" : "normal"}
              >
                Sustainability
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
              {menu === 1 && <div>About the Firm </div>}
              {menu === 2 && <div> Pro Bono </div>}
              {menu === 3 && <div> Diversity, Equity & Inclusion </div>}
              {menu === 4 && <div> Sustainability </div>}
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
                About the Firm
              </li>
              <li
                onClick={() => {
                  setMenu(2);
                  closeMenu();
                }}
                className={menu === 2 ? "active" : "normal"}
              >
                Pro Bono 
              </li>
              <li
                onClick={() => {
                  setMenu(3);
                  closeMenu();
                }}
                className={menu === 3 ? "active" : "normal"}
              >
                Diversity, Equity & Inclusion
              </li>
              <li
                onClick={() => {
                  setMenu(4);
                  closeMenu();
                }}
                className={menu === 4 ? "active" : "normal"}
              >
                Sustainability
              </li>
            </ul>
          </div>
        </div>

        <div className="body">
          {menu === 1 && <AboutTheFirm />}
          {menu === 2 && <ProBono />}
          {menu === 3 && <Diversity />}
          {menu === 4 && <Sustainability />}
        </div>
      </div>
    </div>
  )
}

export default TheFirmBody