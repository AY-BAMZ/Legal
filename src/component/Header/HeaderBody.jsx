import React, { useState } from "react";
import HamburgerMenu from "../Icons/hamburgerMenu.svg";
import CloseTheMenu from "../Icons/close.svg";
import "./Index.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/footerlogo.png"

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
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
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
          <Link to="/"><li onClick={() => closeMenu()} className="link">
              Home
            </li></Link>
            <Link to="/about"><li onClick={() => closeMenu()} className="link">
              About
            </li></Link>
            <Link to="/thefirm">
            <li onClick={() => closeMenu()} className="link">
              The Firm
            </li></Link>
            <Link to="/attorneys">
            <li onClick={() => closeMenu()} className="link">
              Attorneys
            </li></Link>
            <Link to="/practices">
            <li onClick={() => closeMenu()} className="link">
              Practices
            </li></Link>
            <Link to="/careers">
            <li onClick={() => closeMenu()} className="link">
              Careers
            </li></Link>
            <Link to="/contact">
            <li onClick={() => closeMenu()} className="link">
              Contact
            </li></Link>
          </ul>
          <div className="logo"><img src={Logo} alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBody;
