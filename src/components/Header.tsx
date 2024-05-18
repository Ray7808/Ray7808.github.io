import { Link } from "react-router-dom";
import { useState } from "react";
import { DarkmodeSwitch } from "./DarkmodeSwitch";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md p-4 relative">
      <nav className="container mx-auto flex justify-between items-center boxShadow">
        <Link to="/" className="block  py-2 outline-test">
          Home
        </Link>
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
        <div className="hidden md:flex md:flex-row md:space-x-4">
          <Link to="/projects" className="block py-2">
            Projects
          </Link>
          <Link to="/about" className="block py-2">
            About
          </Link>
          <Link to="/contact" className="block py-2">
            Contact
          </Link>
          <DarkmodeSwitch />
        </div>
      </nav>
      {isOpen && (
        <div className="relative top-full left-0 right-0 flex flex-col items-start md:hidden shadow-lg outline-test">
          <Link to="/projects" className="block py-2 w-full">
            Projects
          </Link>
          <Link to="/about" className="block py-2 w-full">
            About
          </Link>
          <Link to="/contact" className="block py-2 w-full">
            Contact
          </Link>
          <DarkmodeSwitch className="px-4 py-2" />
        </div>
      )}
    </header>
  );
}

export default Header;
