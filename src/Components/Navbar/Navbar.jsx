import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isHomePage }) => {
  return (
    <nav>
      <div className="logo">
        <img src={require("../../assets/Navbar/netflix.png")} alt="" />
      </div>
      <div className="button">
        {isHomePage ? (
          <Link to="/signin">
            <button id="signin">Sign in</button>
          </Link>
        ) : (
          <Link to="/">
            <button id="home">Home</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
