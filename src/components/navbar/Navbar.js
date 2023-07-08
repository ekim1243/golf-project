import React, { useState } from "react";
import { FaBars, FaTimes, FaGolfBall } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <section id="home">
        <FaBars
          className="faBars"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <h2>Menu</h2>
      </section>

      <div className={`menu-drop ${isOpen ? "active" : "inactive"}`}>
        <ul>
          <DropDownList text="Home" href="#home" />
          <DropDownList text="About" href="#about" />
          <DropDownList text="Contacts" href="#contacts" />
          <DropDownList text="TeeTimes" href="#teeTimes" />
          <DropDownList text="SocialMedia" href="#socialMedia" />
        </ul>
        <FaTimes
          className="faTimes"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <h2>Close Menu</h2>
      </div>

      <div className="golfball-container">
        <div className="golfball-wrapper">
          <FaGolfBall className="FaGolfBall" />
        </div>
      </div>
    </nav>
  );
}

function DropDownList(props) {
  return (
    <li>
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

export default Navbar;
