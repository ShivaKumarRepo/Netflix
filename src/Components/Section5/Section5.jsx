import React from "react";
import "./Section5.css";
import device from "../../assets/section5/device.png";
import video from "../../assets/section5/devices.mp4";

const Section5 = () => {
  return (
    <>
      <hr className="separator" />
      <div className="section5">
        <div className="sec-content">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="sec-video">
          <img src={device} alt="" />
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
};

export default Section5;
