import { useState } from "react";
// import logo from "../public/logo.png"
import logo from "../public/logo2.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`h-20 w-full fixed  z-50 ${
        darkMode ? "shadow-white" : "shadow-black"
      } dark:bg-black navbarlight`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 dark:text-white">
          <div className="flex-shrink-0 text-2xl font-bold ml-7 ">
            <a href="/">
              <img
                src={logo}
                alt=""
                className="h-14 filter inverting dark:invert-0 "
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-8 text-xl font-medium">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/Work" className="hover:underline">
              Work
            </Link>
            <Link to="/About" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="#">
              <div className="flex items-center">
                <button
                  onClick={toggleDarkMode}
                  className="text-gray-900 dark:text-white focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={darkMode ? faSun : faMoon}
                    size="lg"
                    className=""
                  />
                </button>
              </div>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden inset-0 z-50 absolute top-20 w-full dark:text-white dark:bg-black">
            <div className="py-4 ease-in-out transform flex flex-col items-center space-y-4 text-xl font-medium w-full dark:bg-black navbarlight">
              <Link to="/" className=" hover:underline">
                Home
              </Link>
              <Link to="/Work" className="hover:underline">
                Work
              </Link>
              <Link to="/About" className="hover:underline">
                About
              </Link>
              <Link to="/Contact" className="hover:underline">
                Contact
              </Link>
              <Link to="#" className="hover:underline">
              <button
                  onClick={toggleDarkMode}
                  className="text-gray-900 dark:text-white focus:outline-none"
                >
                  
                  <FontAwesomeIcon
                    icon={darkMode ? faSun : faMoon}
                    size="lg"
                    className=""
                  />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
