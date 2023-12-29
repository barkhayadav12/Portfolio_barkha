import React from "react";
import solowhisper from "./photos/soloWhisperr.jpeg";
import crypto from "./photos/crypto.jpeg";
import chat from "./photos/chat.jpeg";
import jokes from "./photos/jokes.jpeg";
import plannar from "./photos/plannar.jpeg";
import slider from "./photos/slider.jpeg";

const Projects = () => {
  const soloWhisper = {
    img: "",
    title: "SoloWhisper",
    description:
      "Developed an application where the users can write about their adventures and post their daily happenings.",
    link:'https://github.com/barkhayadav12/SoloWhisper_SOLO',
    tech: "The frontend is built using Ejs and Bootstrap and the Backend is built using Node.js,Express.js and DataBase is MongoDB.",
  };
  const chatRoom = {
    img: "",
    title: "ChatRoom",
    description: "Developed a realtime chatting application.",
    link: "#",
    tech: "Built with React.js, Node.js and used Socket.io library.",
  };
  const cryptoTracker = {
    img: "",
    title: "CrytoCurrency Tracker",
    description: "Developed a CrytoCurrency Tracker.",
    link: "#",
    tech: "Built with React.js, Axios and Bootstrap.",
  };
  const imageSlider = {
    img: "",
    title: "Image Slider",
    link: "#",
    description: "A simple image slider.",
    tech: "Built using HTML,CSS and JavaScript.",
  };
  const studyPlannar = {
    img: "",
    title: "Study Plannar",
    description:
      "The users can plan their study TimeTable and can also make notes.",
    link: "#",
    tech: "Built using HTML,CSS and JavaScript.",
  };
  const guessGame = {
    img: "",
    title: "Random Jokes",
    description: "Shows random jokes.",
    link: "#",
    tech: "Built using HTML,CSS and JavaScript.",
  };
  return (
    <div class="projectContainer ">
      <h1 style={{ textAlign: "center" ,color:'white'}}>My Recent <span style={{color:'violet'}}>Works</span></h1>
      <p style={{ textAlign: "center" ,color:'white'}}>
        Here are few projects I've worked on recently.
      </p>
      <div className="majorProjects">
        <div className="projects">
          <div className="imgProjects">
            <img src={solowhisper} />
          </div>
          <h3>{soloWhisper.title}</h3>
          <p>{soloWhisper.description}</p>
          <h6>{soloWhisper.tech}</h6>
          <div className="btnProjects">
            <button className="btnP">
              <a href={soloWhisper.link}><i class="bi bi-github"></i>  GitHub</a>
            </button>
          </div>
          </div>
          <div className="projects">
            <div className="imgProjects">
              <img src={chat} />
            </div>
            <h3>{chatRoom.title}</h3>
            <p>{chatRoom.description}</p>
            <h6>{chatRoom.tech}</h6>
            <div className="btnProjects">
              <button className="btnP">
                <a href='https://github.com/barkhayadav12/ChatRoom'><i class="bi bi-github"></i> GitHub</a>
              </button>
            </div>
          </div>
          <div className="projects">
            <div className="imgProjects">
              <img src={crypto} />
            </div>
            <h3>{cryptoTracker.title}</h3>
            <p>{cryptoTracker.description}</p>
            <h6>{cryptoTracker.tech}</h6>
            <div className="btnProjects">
              <button className="btnP">
                <a href='https://github.com/barkhayadav12/CryptoTracker'><i class="bi bi-github"></i> GitHub</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ padding: "10px",marginLeft:'12px' }} className="mini">
            Mini Projects
          </h1>
          <div className="majorProjects">
            <div className="projects">
              <div className="imgProjects">
                <img src={slider} />
              </div>
              <h3>{imageSlider.title}</h3>
              <p>{imageSlider.description}</p>
              <h6>{imageSlider.tech}</h6>
              <div className="btnProjects">
                <button className="btnP">
                  <a href='https://github.com/barkhayadav12/ImageSlider'><i class="bi bi-github"></i> GitHub</a>
                </button>
              </div>
            </div>
            <div className="projects">
              <div className="imgProjects">
                <img src={plannar} />
              </div>
              <h3>{studyPlannar.title}</h3>
              <p>{studyPlannar.description}</p>
              <h6>{studyPlannar.tech}</h6>
              <div className="btnProjects">
                <button className="btnP">
                  <a href='https://github.com/barkhayadav12/StudyPlannar'><i class="bi bi-github"></i> GitHub</a>
                </button>
              </div>
            </div>
            <div className="projects">
              <div className="imgProjects">
                <img src={jokes} />
              </div>
              <h3>{guessGame.title}</h3>
              <p>{guessGame.description}</p>
              <h6>{guessGame.tech}</h6>
              <div className="btnProjects">
                <button className="btnP">
                  <a href='https://github.com/barkhayadav12/RandomJokes'><i class="bi bi-github"></i> GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;