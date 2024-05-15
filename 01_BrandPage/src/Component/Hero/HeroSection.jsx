import React from "react";
import "./HeroSection.css";
import img1 from "../../assets/img1.png";

const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
          ipsam.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Catagory</button>
        </div>
        <div className="avilable">Not Available this product</div>
      </div>
      <div className="hero-img">
        <img src={img1} alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
