import React, { useState } from "react";
import "./Section3.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../assets/section3/avengers.jpg";
import img2 from "../../assets/section3/super30.jpg";
import img3 from "../../assets/section3/bahubali.jpg";
import img4 from "../../assets/section3/got.jpg";
import img5 from "../../assets/section3/kgf2.jpg";
import img6 from "../../assets/section3/liger.jpg";
import img7 from "../../assets/section3/rrr.jpeg";
import img8 from "../../assets/section3/vikram.jpg";

import video1 from "../../assets/section3/avengers.mp4";
import video2 from "../../assets/section3/Super30.mp4";
import video3 from "../../assets/section3/Bahubali.mp4";
import video4 from "../../assets/section3/Got.mp4";
import video5 from "../../assets/section3/Kgf2.mp4";
import video6 from "../../assets/section3/Liger.mp4";
import video7 from "../../assets/section3/RRR.mp4";
import video8 from "../../assets/section3/Vikram.mp4";

const Section3 = () => {
  const imgages = [img1, img2, img3, img4, img5, img6, img7, img8];
  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    setSelected(i);
  };

  return (
    <>
      <hr className="separator" />
      <div className="section3">
        <div className="images">
          <Slider {...settings}>
            {imgages.map((image, i) => {
              return (
                <div key={i} onClick={() => handleSelect(i)}>
                  <img src={image} alt="" />;
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="videos">
          <div className="display-video">
            <video
              src={selected !== null ? videos[selected] : ""}
              id="show-video"
              controls
              autoPlay={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
