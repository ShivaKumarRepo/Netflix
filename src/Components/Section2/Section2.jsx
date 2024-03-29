import React from "react";
import "./Section2.css";
import tv from "../../assets/section2/tv.jpg";
import remote from "../../assets/section2/remote.jpg";
import video from "../../assets/section2/tv.mp4";

const Section2 = () => {
  return (
    <>
      <hr className="separator" />
      <div className="section2">
        <div className="sec-content">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="sec-video">
          <img src={tv} alt="" id="tv" />
          <video src={video} autoPlay loop muted></video>
          <img src={remote} alt="" id="remote"/>
        </div>
      </div>
    </>
  );
};

export default Section2;
