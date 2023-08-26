import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../../images/Logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container lg:flex lg:justify-between items-center">
        <div className="lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
          <div className="flex justify-center lg:justify-start mb-4">
            <span className="text-2xl font-Poppins">Orchard Family Dentistry</span>
          </div>
          <p className="mb-5 md:text-justify md:py-4 md:px-2">
            5220 Dundas St #6 <br />
            Burlington, ON L7L 0J4 <br />
            Call Today <br />
            650-665-5854
          </p>
          <div className="text-primary text-2xl flex justify-center lg:justify-start">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
              <i className="fab fa-facebook-square ml-2"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
              <i className="fab fa-instagram-square ml-2"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/">
              <i className="fab fa-twitter-square ml-2"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
              <i className="fab fa-linkedin ml-2"></i>
            </a>
          </div>
        </div>

        <div className="mb-5 w-1/2 mx-auto md:w-1/3 md:w-1/5 md:mb-6">
          {/* Image Section */}
          <img src={footerImage} alt="Footer Image" className="mx-7" />
        </div>
        
        <div className="text-center md:w-1/3 md:text-right">
          <h1 className="text-2xl font-Poppins">Quick Links</h1>
          <ul className="py-3.5">
            <li className="py-0.5 hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="py-0.5 hover:text-primary">
              <Link to="/about">About Us</Link>
            </li>
            <li className="py-0.5 hover:text-primary">
              <Link to="/services">Services</Link>
            </li>
            <li className="py-0.5 hover:text-primary">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
