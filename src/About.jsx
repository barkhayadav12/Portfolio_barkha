import React from "react";
import "./index.css";
import img from "./photos/abg.jpeg";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutme" style={{ color: "white" }}>
        <h1 style={{ color: "violet" }}>A little about me,</h1>
        <h5 style={{marginTop:'10px'}}>Hello!</h5>
        <p>
          My name is Barkha Yadav. I am a 2nd year undergraduate at NIT,
          Manipur.
        </p>
        <p>
          An avid learner with interest in programming and software development.
        </p>
        <p>I am tech geek and likes to explore new technology and softwares.</p>
        <p>I love problem solving and my field of interest are Web development and App development.</p>
        <p>
          My hobbies are watching anime,reading manga,gaming and I like making
          diy sometimes :)
        </p>
      </div>
      <div className="tech">
        <h2 style={{color:'violet'}}>Tech I'm familiar with</h2>
        <p>C++</p>
        <p>C</p>
        <p>Python</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React.js</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>Ejs</p>
        <p>MySQL</p>
        <p>MongoDB</p>


      </div>
      <div></div>
    </div>
  );
};

export default About;
