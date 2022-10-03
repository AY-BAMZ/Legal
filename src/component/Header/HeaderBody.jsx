import React, { useState } from "react";
import HamburgerMenu from "../Icons/hamburgerMenu.svg";
import CloseTheMenu from "../Icons/close.svg";
import "./Index.css";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <li className="link">Home</li>
            </Link>
            <Link to="/about">
              <li className="link">About</li>
            </Link>
            <Link to="/thefirm">
              <li className="link">The Firm</li>
            </Link>
            <Link to="/attorneys">
              <li className="link">Attorneys</li>
            </Link>
            <Link to="/practices">
              <li className="link">Practices</li>
            </Link>
            <Link to="/careers">
              <li className="link">Careers</li>
            </Link>
            <Link to="/contact">
              <li className="link">Contact</li>
            </Link>
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
