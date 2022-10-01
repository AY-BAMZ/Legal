import React from "react";
import Facebook from '../Icons/facebook.svg'
import Twitter from '../Icons/twitter.svg'
import Google from '../Icons/google.svg'
import LinkedIn from '../Icons/linkedIn.svg'
import "./Index.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>About Us</h4>
            <p>
              LLDE & partners is authorised and regulated by the Bar Standards
              Board in England and Wales. The lawyers at Giambrone & Partners
              Studio Legale Associato are regulated by the Italian Law
            </p>
          </div>
          <div className="col">
            <h4>Services</h4>
            <ul>
              <li>General practice</li>
              <li>Corporate law</li>
              <li>Financial law</li>
              <li>Business law</li>
              <li>Mediation</li>
            </ul>
          </div>
          <div className="col">
            <h4>Extra Links</h4>
            <ul>
              <li>About us</li>
              <li>Terms and conditions</li>
              <li>Privacy policy</li>
              <li>News</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col">
            <h4>Follow Us</h4>
            <div className="socials">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Google} alt="" />
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
