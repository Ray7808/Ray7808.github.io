import { Link } from "react-router-dom";
import { useState } from "react";
import { DarkmodeSwitch } from "./DarkmodeSwitch";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="space-x-4 boxShadow">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex-row md:space-x-4 md:flex`}
          >
            <Link to="/" className="block py-2">
              Blog
            </Link>
            <Link to="/projects" className="block py-2">
              Projects
            </Link>
            <Link to="/about" className="block py-2">
              About
            </Link>
            <Link to="/contact" className="block py-2">
              Contact
            </Link>
          </div>
        </nav>
        <DarkmodeSwitch />
      </div>
    </header>
  );
}

export default Header;
