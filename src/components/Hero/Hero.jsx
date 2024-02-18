import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero_title">
          Discover the joy of learning
          <span style={{ color: "#bee8cc" }}>English</span> with us!
        </h1>
        <button className="hero_btn">Leave your application </button>
      </div>
    </div>
  );
}

export default Hero;
