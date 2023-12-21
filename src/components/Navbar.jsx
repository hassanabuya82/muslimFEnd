import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div>
          <a href="/" className="text-white text-3xl font-bold tracking-wide">
            Muslim<span className="text-yellow-500">Scholars</span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <FaXmark className="w-8 h-8" />
            ) : (
              <FaBars className="w-8 h-8" />
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <ul className={`flex ${isMenuOpen ? 'md:flex-col md:items-start md:space-y-4' : ''} space-x-8`}>
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-white hover:text-yellow-500 transition duration-300"
                  activeclassname="font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 lg:ml-auto text-2xl">
            <FaFacebook className="text-white hover:text-orange-300 cursor-pointer" aria-label="Facebook"/>
            <FaInstagram className="text-white hover:text-orange-300 cursor-pointer" aria-label="Instagram"/>
            <FaTwitter className="text-white hover:text-orange-300 cursor-pointer" aria-label="twitter"/>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 lg:hidden">
          <ul className="py-4 text-white">
            {navItems.map(({ path, link }) => (
              <li key={path} className="py-2 pl-6">
                <NavLink
                  to={path}
                  className="hover:text-yellow-500 transition duration-300"
                  activeclassname="font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
            <div className="flex justify-center space-x-4 py-4 text-2xl">
            <FaFacebook className="text-white hover:text-orange-300 cursor-pointer" aria-label="Facebook"/>
            <FaInstagram className="text-white hover:text-orange-300 cursor-pointer" aria-label="Instagram"/>
            <FaTwitter className="text-white hover:text-orange-300 cursor-pointer" aria-label="twitter"/>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
