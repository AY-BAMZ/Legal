import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

function HomeBody() {
  return (
    <div className="homeBody">
      <h1>
        Levin, Lipton, Denner & Englander <h2>Attroney's At Law</h2>
      {/* <div className="buttons">
      <Link to="/contact"><button>Contact Us</button></Link>
        <Link to="/practices"> <button className="btn">Practices</button></Link>
      </div> */}
      </h1>
    </div>
  );
}

export default HomeBody;
