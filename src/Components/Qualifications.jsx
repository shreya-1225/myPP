import React from "react";
import "./qualifications.css"; // Importing CSS file

// Corrected image imports
import htmlLogo from "/Props/htm.jpg";
import cssLogo from "/Props/css.jpg";
import jsLogo from "/Props/js.png";
import reactLogo from "/Props/React.jpg";
import nodeLogo from "/Props/node.jpg"; // Assuming Bootstrap as placeholder
import mongodbLogo from "/Props/mb.jpg"; // Replace with actual MongoDB image if incorrect
import javaLogo from "/Props/java.jpg";
import PythonLogo from "/Props/Python.jpg";

const qualifications = [
  { name: "HTML", img: htmlLogo },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "React.js", img: reactLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "MongoDB", img: mongodbLogo },
  { name: "Java", img: javaLogo },
  { name: "Python", img: PythonLogo },
];

const Qualifications = () => {
  return (
    <div id="qualification" className="qualifications-container">
      <h2 className="skills-heading">My Skills</h2> {/* Added Heading */}
      <div className="qualifications-boxes">
        {qualifications.map((item, index) => (
          <div key={index} className="qualification-box">
            <img src={item.img} alt={item.name} className="qualification-img" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
