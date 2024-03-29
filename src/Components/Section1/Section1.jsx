import React from "react";
import "./Section1.css";
import Navbar from "../Navbar/Navbar";
import img1 from "../../assets/section1/arrow.jpg";

const Section1 = () => {
  return (
    <>
      <div className="hero">
        <Navbar isHomePage={true} />
        <div className="content">
          <h1>Unlimited movies,</h1>
          <h1>TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="input">
          <input type="email" placeholder="Email Address" />
          <button>Get Started</button>
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section1;
