import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa"; // Best match for Skills
import { GoProject } from "react-icons/go"; // Perfect for Projects
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#qualification">
        <FaUserGraduate className="icon" /> {/* Perfect for Skills */}
      </a>
      <a href="#members">
        <GoProject className="icon" /> {/* Perfect for Projects */}
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
