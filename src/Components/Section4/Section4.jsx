import React from "react";
import "./Section4.css";
import mobile from "../../assets/section4/image.jpg";
import boxshot from "../../assets/section4/boxshot.png";
import progress from "../../assets/section4/progress.gif";

const Section4 = () => {
  return (
    <>
      <hr className="separator" />
      <div className="section4">
        <div className="sec-mobile">
          <img src={mobile} alt="" id="mobile" />
          <div className="box">
            <img src={boxshot} alt="" id="boxshot" />
          </div>
          <div className="box-content">
            <h3>Stranger Things</h3>
            <p>Downloading...</p>
          </div>
          <div className="img">
              <img src={progress} alt="" id="progress" />
            </div>
        </div>
        <div className="sec-content">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </>
  );
};

export default Section4;
