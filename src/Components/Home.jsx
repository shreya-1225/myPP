import { useState } from "react";
import "./home.css";
import img from "/Props/img2.jpg";
import Button from "./Button";
import { BsMouse } from "react-icons/bs";

function Home() {
  const [isActive, setIsActive] = useState(false);

  const toggleSpin = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div
          className={`hover-show ${isActive ? "active" : ""}`}
          onClick={toggleSpin}
        >
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>𝙲𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢,</p>
        <p>A Final Year BCA Student👩‍💻 </p>
        <p>Graduating May 2025... </p>
        <p>____________</p>
        <p>𝚆𝚑𝚎𝚗 𝚝𝚑𝚎 𝚜𝚌𝚛𝚎𝚎𝚗 𝚜𝚕𝚎𝚎𝚙𝚜...💤</p>
        <p>I Paint🎨, I Snap 📸 </p>
        <p>I Wander 🏔️, I Vibe🎵🎸</p>
        <p>That's all you needed to know🏃‍♀️</p>
      </h2>

      <Button />
    </div>
  );
}

export default Home;
