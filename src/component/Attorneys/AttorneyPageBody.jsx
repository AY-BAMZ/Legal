import React from "react";

function AttorneyPageBody(props) {
  const {
    image,
    name,
    about,
    id,
    address,
    publications,
    position,
    education,
  } = props;

  console.log("props :>> ", props);
  return (
    <div className="attorneyPageBody">
      <div className="container">
        <div className="row">
          <div className="colOne">
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="colTwo">
            <div className="info">
              <h2>{name}</h2>
              <pre>
                <p>{about}</p>
              </pre>
              <h3>Select Publications</h3>
              <pre>
                <p>{publications}</p>
              </pre>
              <h3>Position</h3>
              <h6>{position}</h6>
              <h3>Email Address</h3>
              <h6>{address}</h6>
              <h3>Education</h3>
              <pre>
                <p>{education}</p>
              </pre>
            </div>
            <div className="buttons">
              <button>Download PDF</button>
              <button className="btn">Download VCard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttorneyPageBody;
