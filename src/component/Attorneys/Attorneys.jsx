import React, { useContext } from "react";
import { AttorneyContext } from "../Context/AttorneyContext";
import Attorney from "./Attorney";
import "./Index.css";

function Attorneys() {
  const { attorneys } = useContext(AttorneyContext);
  return (
    <div className="attorneys">
      <div className="container">
        <div className="content">
          <h2>Attorneys</h2>
          <div className="row">
            {attorneys.map((attorney) => (
              <div className="col">
                <Attorney {...attorney} key={attorney.id} />
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attorneys;
