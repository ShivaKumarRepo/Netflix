import React from "react";
import img1 from "../../../assets/Navbar/globe.png";

const Fotter = () => {
  return (
    <>
      <footer className="footer">
        <div className="query">
          <p>Questions?</p>
          <p>Call 000-800-040-1843</p>
        </div>
        <div className="footer-links">
          <div className="info">
            <p>FAQ</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="info">
            <p>Help Centre</p>
            <p>Corporate Information</p>
          </div>
          <div className="info">
            <p>Terms of Use</p>
            <p id="netflix">Netflix</p>
          </div>
          <div className="info">
            <p>Privacy</p>
            <p id="netflix">Netflix</p>
          </div>
        </div>
        <div className="f-language">
          <div className="f-globe">
            <img src={img1} alt="" />
          </div>
          <div className="f-options">
            <select name="lang" className="language-select">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
