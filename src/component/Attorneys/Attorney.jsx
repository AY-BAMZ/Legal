import React from "react";
import { Link } from "react-router-dom";


function Attorney({ image, name, practice, id, position }) {
  // const [attorneys, setAttorneys] = useContext(AttorneyContext)
  return (
    <div className="attorney">
      <div className="content">
        <div className="image">
        <img src={image} alt="" />
        </div>
        <div className="info">
             <h3>{name}</h3>
             <h6>Practice: <span>{practice}</span> </h6>
             <h6>Position: <span>{position}</span> </h6>
             <Link  to={"/attorney/" + id}>
                <div className="view">View Profile</div>
             </Link>
        </div>
      </div>
    </div>
  );
}

export default Attorney;
