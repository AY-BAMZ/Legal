import React, { useState } from "react";
import HamburgerMenu from "../Icons/hamburgerMenu.svg";
import CloseTheMenu from "../Icons/close.svg";
import "./Index.css";

function HeaderBody() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="headerBody">
      <div className="container">
        <div className="navLinks">
          <ul>
            <li className="link">Home</li>
            <li className="link">About</li>
            <li className="link">The Firm</li>
            <li className="link">Attorneys</li>
            <li className="link">Practices</li>
            <li className="link">Careers</li>
            <li className="link">Contact</li>
          </ul>
        </div>
        <div className="mobileLink">
          <div className="menu" onClick={handleToggle}>
            {navbarOpen ? (
              <img src={CloseTheMenu} alt="" />
            ) : (
              <img src={HamburgerMenu} alt="" />
            )}
          </div>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li onClick={() => closeMenu()} className="link">
              Home
            </li>
            <li onClick={() => closeMenu()} className="link">
              About
            </li>
            <li onClick={() => closeMenu()} className="link">
              The Firm
            </li>
            <li onClick={() => closeMenu()} className="link">
              Attorneys
            </li>
            <li onClick={() => closeMenu()} className="link">
              Practices
            </li>
            <li onClick={() => closeMenu()} className="link">
              Careers
            </li>
            <li onClick={() => closeMenu()} className="link">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBody;
