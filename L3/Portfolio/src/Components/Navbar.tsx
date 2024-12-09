import { useState } from "react";
// import logo from "../public/logo.png"
import logo from "../public/logo2.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white h-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 text-2xl font-bold ml-7 ">
            <a href="#">
                <img src={logo} alt=""  className="h-14 filter invert" />
            </a>
          </div>
          <div className="hidden md:flex space-x-8 text-xl font-medium">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#work" className="hover:underline">
              Work
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 text-xl font-medium">
              <a href="#home" className="hover:underline">
                Home
              </a>
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#work" className="hover:underline">
                Work
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
