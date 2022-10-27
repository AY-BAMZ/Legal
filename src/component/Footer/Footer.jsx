import React from "react";
import Facebook from '../Icons/facebook.svg'
import Twitter from '../Icons/twitter.svg'
// import Google from '../Icons/google.svg'
import LinkedIn from '../Icons/linkedIn.svg'
import "./Index.css";
import { Link } from "react-router-dom";
import FooterLogo from '../Assets/footerlogo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4><img src={FooterLogo} alt="" /></h4>
            <p>
              LLDE & partners is authorised and regulated by the Bar Standards
              Board in England Spain and New York . The lawyers at LLDE & partners
               are regulated by the Law
            </p>
          </div>
          <div className="col">
            <h4>Services</h4>
            <ul>
            <Link to="/practices"><li>General practice</li> </Link>
            <Link to="/careers"><li>Careers</li> </Link>
            <Link to="/attorneys"><li>Attorneys</li> </Link>
            <Link to="/thefirm"><li>The Firm</li> </Link>
            </ul>
          </div>
          <div className="col">
            <h4>Extra Links</h4>
            <ul>
            <Link to="/about"><li>About us</li> </Link>
              <li>Terms and conditions</li>
              <li>Privacy policy</li>
              <li>News</li>
              <Link to="/contact"><li>Contact us</li></Link>
            </ul>
          </div>
          <div className="col">
            <h4>Follow Us</h4>
            <div className="socials">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={LinkedIn} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="bottomSection">
          <p>© Copyright 2022 | All right reserved</p>
          <div className="links">
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
