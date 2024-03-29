import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Signin.css";
import Form from "./Components/Form";
import Fotter from "./Components/Fotter";

const Signin = () => {
  return (
    <>
      <div className="sec-signin">
        <Navbar isHomePage={false} />
        <Form />
        <Fotter />
      </div>
    </>
  );
};

export default Signin;
