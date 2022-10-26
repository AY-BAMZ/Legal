import React from "react";
import "./Index.css";
import Map from "../Icons/map.JPG";

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
                  <br /> lldel Law
                </h6>
                <p>
                  <h6>Office Locations</h6>
                  England
                  <br />
                  Head Office, One York Road, Uxbridge, UB8 1RN
                  <br />
                  <br />
                  New York
                  <br />
                  70 Pine Street, Manhattan, New York 10001
                </p>
                <h6>Call Us </h6>
                <p>
                  England Phone Number <span> +44 786-214-5380</span>
                  <br />
                  <br />
                  New York Phone Number <span> 1 787-417-8042</span> <br />
                  <br />
                  Spain Phone Number<span> +34 881 800 393</span>{" "}
                </p>
                <hr />
                <p>
                  For general inquiries, please contact:
                  <span>consult@lldelaw.com.</span>
                  <br />
                  <br />
                  To report technical problems or errors on our Web site, please
                  contact <span>consult@lldelaw.com.</span>
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
