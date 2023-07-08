import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <footer id="contacts" className="footer-container">
      <div className="social-icons">
        <div className="icon-container">
          <i className="icon">
            <FaFacebook />
          </i>
          <i className="icon">
            <FaTwitter />
          </i>
          <i className="icon">
            <FaYoutube />
          </i>
          <i className="icon">
            <FaInstagram />
          </i>
        </div>
        <p id="socialMedia" className="social-text">
          Social Media
        </p>
      </div>

      <div>
        <ul>
          <li>Contact Us</li>
          <li>Directions</li>
          <li>Careers</li>
          <li>News</li>
          <li>Pictures</li>
          <li>FAQs</li>
          <li>Terms Of Service</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Join us for news, offers, and more!</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address."
          />
          <button type="submit">Sign Up</button>
        </div>

        {showAlert && (
          <div className="alert">
            Thank you for subscribing!
            <button onClick={() => setShowAlert(false)}>Close</button>
          </div>
        )}
      </form>
    </footer>
  );
};

export default Footer;
