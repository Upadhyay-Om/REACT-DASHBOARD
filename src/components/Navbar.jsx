import React, { useState } from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex items-center justify-between relative z-50">
        {/* logo - hide when menu is open on mobile */}
        <div className={`pt-2 ${isMenuOpen ? 'md:block hidden' : 'block'}`}>
          <img src={logo} alt="logo" />
        </div>
        
        {/* Desktop menu */}
        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" className="hover:text-darkGrayishBlue">Product</a>
          <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
          <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" className="hover:text-darkGrayishBlue">Community</a>
        </div>
        
        {/* Button */}
        <a 
          href="#" 
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>
        
        {/* Hamburger Icon - High z-index to stay on top */}
        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none relative z-50 ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu - Lower z-index than button */}
      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-40 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <a href="#" onClick={toggleMenu} className="hover:text-brightRed">Pricing</a>
          <a href="#" onClick={toggleMenu} className="hover:text-brightRed">Product</a>
          <a href="#" onClick={toggleMenu} className="hover:text-brightRed">About Us</a>
          <a href="#" onClick={toggleMenu} className="hover:text-brightRed">Careers</a>
          <a href="#" onClick={toggleMenu} className="hover:text-brightRed">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
