import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <h1 className="about_title">About Us</h1>
      <p className="about_content">
        We are dedicated to providing engaging and effective English language
        <br />
        courses in a supportive and stimulating learning environment
      </p>
      <div className="about-us__wrapper">
        <div className="about-us__list-left">
          <div className="about-us__list">
            <h4>01</h4>
            <p>Expert, innovative teaching staff</p>
          </div>
          <div className="about-us__list">
            <h4>01</h4>
            <p>Expert, innovative teaching staff</p>
          </div>
          <div className="about-us__list">
            <h4>01</h4>
            <p>Expert, innovative teaching staff</p>
          </div>
          <div className="about-us__list">
            <h4>01</h4>
            <p>Expert, innovative teaching staff</p>
          </div>
         
        </div>
        <div className="about-us__list-right">
          <img
            src="https://sofiaprotsiv.github.io/english-excellence/assets/memoji-d2e3392e.webp"
            alt=""
          />
        </div>
      </div>
    </section>
     
  );
}

export default About;
