import React from "react";
import "./members.css";

// Importing images
import medicosImg from "/Props/medicos.jpg";
import chatImg from "/Props/chat.jpg";
import chatbotImg from "/Props/Llm.jpg";

const projects = [
  {
    name: "MEDICOS",
    position: "E-Com Website",
    about:
      "Developed an E-COMMERCE platform using React.js, Node.js, and MongoDB.",
    image: medicosImg,
  },
  {
    name: "ChitChat",
    position: "React Chat App",
    about: "Developed a real-time CHITCHAT APP using React.js and Firebase.",
    image: chatImg,
  },
  {
    name: "LLM Chatbot",
    position: "Gen AI",
    about: "Developed a simple LLM CHATBOT using Streamlit.",
    image: chatbotImg,
  },
];

const Members = () => {
  return (
    <div id="members" className="members-container">
      <h1 className="member-txt">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="member">
          <div className="member-img">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="member-info">
            <h1 className="name">{project.name}</h1>
            <h3 className="position">{project.position}</h3>
            <h4 className="about">{project.about}</h4>
            <a href="#contact" className="contact-member">
              🔗
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
