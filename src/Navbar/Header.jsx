import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-center gap-x-12">
        <a href="#home-section" className="hover:text-yellow-300">Home</a>
        <a href="#about-section" className="hover:text-yellow-300">About</a>
        <a href="#contact-section" className="hover:text-yellow-300">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
