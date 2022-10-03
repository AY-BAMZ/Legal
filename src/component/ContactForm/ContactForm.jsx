import React from "react";
import Call from '../Icons/callbutton.svg'
import "./Index.css";

function ContactForm() {
  return (
    <div className="ContactForm">
      <div className="container">
        <div className="formHeader">
          <h2>Contact Us</h2>
          <p>Get in touch quickly</p>
        </div>
        <div className="formContainer">
          <div className="row">
          <div className="col">
            <h2>Request for free consultation today</h2>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="callUs">
              <img src={Call} alt="" />
              <div className="number">
                <h6>Call Us Now</h6>
                <h3>(414) 567-2109</h3>
              </div>
            </div>
            <h2>Request for free consultation today</h2>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <button className="btn">Email Us</button>
          </div>
          <div className="col">
            <form className="quickMessage">
              <div className="quickForm">

              <div className="row">
                <div className="col">
                  <label htmlFor="">Full name</label>
                  <input placeholder="e.g John carter" type="text" />
                </div>
                <div className="col">
                  <label htmlFor="">Phone number</label>
                  <input placeholder=" e.g +1 (234) 629 6392" type="text" />
                </div>
                <div className="col">
                  <label htmlFor="">Address</label>
                  <input placeholder="e.g no 3 parklane" type="text" />
                </div>
                <div className="col">
                  <label htmlFor="">Email</label>
                  <input placeholder="example@mail.com" type="text" />
                </div>
                <div className="col">
                  <label htmlFor="">Requested service</label>
                  <input placeholder="Property management" type="text" />
                </div>
                <div className="col">
                  <label htmlFor="">Day of service</label>
                  <input placeholder="March 25, 2022" type="text" />
                </div>
                <div className="message">
                  <label htmlFor="">Add a note</label>
                  <textarea placeholder="Please, type your message here" />
                </div>
              </div>
              <button>Submit Message</button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
