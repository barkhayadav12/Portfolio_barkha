import React from "react";
import "./index.css";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutme" style={{ color: "white" }}>
        <h1 style={{ color: "violet" }}>A little about me,</h1>
        <h5 style={{marginTop:'10px'}}>Hello!</h5>
        <p>
        I'm Barkha Yadav, a 2nd year undergraduate at NIT,Manipur.Whenever
        possible, I love learning new technologies and developing new projects.I develop web applications
        mostly using the MERN stack, but I'm also exploring other technologies and frameworks that are interesting to me!
        Additionally, I am studying Mobile App Development.I am passionate about technology, and I love to contribute to the world of technology.
          </p>
      </div>
      <h1 class='tech' style={{color:'violet'}}>Find me on</h1>
      <div className='links tech'>
        <a href='https://x.com/flyhighalwayss?t=JGuyeGggng0kI15bq1K3Bg&s=09'><i class="bi bi-twitter-x"></i></a>
        <a href='https://in.linkedin.com/in/barkha-yadav-727472212'><i class="bi bi-linkedin"></i></a>
        <a href='https://github.com/barkhayadav12'><i class="bi bi-github"></i></a>
        <a href="mailto:barkhayadav125@gmail.com"><i class="bi bi-envelope-at"></i></a>
        </div>
      <div className="tech" style={{marginTop:'70px'}}>
        <h2 style={{color:'violet'}}>Tech I'm familiar with</h2>
        <p>C++</p>
        <p>C</p>
        <p>Python</p>
        <p>Dart</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React.js</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>Ejs</p>
        <p>MySQL</p>
        <p>MongoDB</p>
        <p>Flutter</p>

      </div>
      <div></div>
    </div>
  );
};

export default About;
