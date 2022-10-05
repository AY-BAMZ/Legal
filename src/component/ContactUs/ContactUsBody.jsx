import React from "react";
import './Index.css'
import Map from '../Icons/map.JPG'

function ContactUsBody() {
  return (
    <div className="contactUsBody">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col">
              <div className="image">
                <img src={Map} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="info">
                <h2>Contact Us</h2>
                <h6>
                  To contact the appropriate people or departments, please use
                  the contact information below:
                  <br />
                  <br /> Wachtell, Lipton, Rosen & Katz.
                </h6>
                <p>
                  51 West 52nd Street
                  <br />
                  New York, NY 10019
                </p>
                <p>
                  T 212.403.1000
                  <br />F 212.403.2000
                </p>
                <hr />
                <p>
                  For general inquiries, please contact:
                  <span>info@wlrk.com.</span>
                  <br />
                  <br />
                  Questions regarding staffing can be directed to:
                  <span>hr@wlrk.com.</span><br />
                  Questions regarding legal recruiting can be directed to:
                  <span>recruiting@wlrk.com.</span>
                  <br />
                  <br />
                  To report technical problems or errors on our Web site, please
                  contact <span>techsupp@wlrk.com.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsBody;
