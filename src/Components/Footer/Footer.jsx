import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <hr className="separator" />
      <footer className="footer">
        <div className="query">
          <p>Questions?</p>
          <p>Call 000-800-040-1843</p>
        </div>
        <div className="footer-links">
          <div className="info">
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="info">
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className="info">
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div className="info">
            <p>Media Centre</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
            <p></p>
          </div>
        </div>
        <div className="f-language">
          <div className="f-globe">
            <img src={require("../../assets/Navbar/globe.png")} alt="" />
          </div>
          <div className="f-options">
            <select name="lang" className="language-select">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
        <div className="f-brand">
          <p>Netflix India</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
