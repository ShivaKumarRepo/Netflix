import React from "react";
import "./Section6.css";
const Section6 = () => {
  return (
    <>
       <hr className="separator" />
        <section className="section">
          <div className="image">
            <img src={require("../../assets/section6/children.png")} alt="" />
          </div>
          <div className="content">
            <h1>Create profiles for children.</h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </section>
    </>
  );
};

export default Section6;
