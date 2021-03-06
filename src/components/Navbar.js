import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <span>
        <HiMenuAlt3
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      </span>
      <nav className={isOpen ? "block" : "hidden sm:block"}>
        <ul className="absolute z-10 bg-marvelRed w-full left-0 top-12 text-center h-screen sm:h-auto text-white sm:relative sm:bg-transparent sm:top-0 sm:flex text-2xl sm:text-base">
          <li className="px-2 my-4 sm:my-auto">
            <Link
              className="hover:text-marvelDark sm:hover:text-marvelRed"
              onClick={() => setIsOpen(false)}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="px-2 my-4 sm:my-auto">
            <Link
              className="hover:text-marvelDark sm:hover:text-marvelRed"
              onClick={() => setIsOpen(false)}
              to={"/comics"}
            >
              Comics
            </Link>
          </li>
          <li className="px-2 my-4 sm:my-auto">
            <Link
              className="hover:text-marvelDark sm:hover:text-marvelRed"
              onClick={() => setIsOpen(false)}
              to={"/creators"}
            >
              Creators
            </Link>
          </li>
          <li className="px-2 my-4 sm:my-auto">
            <Link
              className="hover:text-marvelDark sm:hover:text-marvelRed"
              onClick={() => setIsOpen(false)}
              to={"/events"}
            >
              Events
            </Link>
          </li>
          <li className="px-2 my-4 sm:my-auto">
            <Link
              className="hover:text-marvelDark sm:hover:text-marvelRed"
              onClick={() => setIsOpen(false)}
              to={"/series"}
            >
              Series
            </Link>
          </li>
          <li className="px-2 my-4 sm:my-auto">
            <Link
              className="hover:text-marvelDark sm:hover:text-marvelRed"
              onClick={() => setIsOpen(false)}
              to={"/favourites"}
            >
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
