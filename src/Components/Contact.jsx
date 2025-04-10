import "./contact.css";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a href="mailto:shreya1225@gmail.com" className="contact email">
          <AiOutlineMail className="icon" />
          <h2>
            Mail <span>shreyajha1225@gmail.com</span>
          </h2>
        </a>

        <a
          href="https://github.com/shreya-1225"
          className="contact github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub className="icon" />
          <h2>
            GitHub <span>shreya-1225</span>
          </h2>
        </a>

        <a
          href="https://instagram.com/igott.d3deficiency"
          className="contact instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            Instagram <span>igott.d3deficiency</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
