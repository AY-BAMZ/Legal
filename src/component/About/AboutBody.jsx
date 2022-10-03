import React from "react";
import RightArrow from "../Icons/chevronright.svg";
import './Index.css'

function AboutBody() {
  return (
    <div className="aboutBody">
      <div className="container">
        <div className="headers">
          <h2>About</h2>
          <p>A little information about who we are</p>
        </div>
        <div className="section">
          <div className="row">
            <div className="columnOne">
              <div className="content">
                <div className="one">
                  <h3>
                    Featured in Financial Times online course on ESG from the
                    world’s leading experts.
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an
                  </p>
                  <button>
                    Explore Courses <img src={RightArrow} alt="" />
                  </button>
                </div>
                <div className="one">
                  <h3>Does capitalism need saving from itself?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an
                  </p>
                  <button>
                    Read Article
                    <img src={RightArrow} alt="" />
                  </button>
                </div>
                <div className="one">
                  <h3>
                    Directors have a duty to look beyond their shareholders, by
                    Martin Lipton
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an
                  </p>
                  <button>
                    Read Article
                    <img src={RightArrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="columnTwo">
              <div className="content">
                <div className="two">
                  <h3>Some of our recent memos on these topics:</h3>
                  <p>Dealing with Activist Hedge Funds and Other Activist Investors  (October 15, 2021)</p>
                  <p>Spotlight on Boards  (September 1, 2021)</p>
                  <p>More Myths from Lucian Bebchuk   (August 23, 2021)</p>
                  <p>Risk Management and the Board of Directors   (August 10, 2021)</p>
                  <p>Spotlight on Boards and Board Oversight of Business Strategy and Risk Management in a Post-Pandemic World  (July 26, 2021)</p>
                  <p>Further on the Purpose of the Corporation  (July 19, 2021)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
