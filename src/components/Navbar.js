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
        <ul className="absolute bg-white w-full left-0 top-14 font-bold text-center h-full text-marvelRed sm:relative sm:bg-transparent sm:top-0 sm:flex ">
          <li className="px-2">
            <Link onClick={() => setIsOpen(false)} to={"/"}>
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link onClick={() => setIsOpen(false)} to={"/comics"}>
              Comics
            </Link>
          </li>
          <li className="px-2">
            <Link onClick={() => setIsOpen(false)} to={"/creators"}>
              Creators
            </Link>
          </li>
          <li className="px-2">
            <Link onClick={() => setIsOpen(false)} to={"/events"}>
              Events
            </Link>
          </li>
          <li className="px-2">
            <Link onClick={() => setIsOpen(false)} to={"/series"}>
              Series
            </Link>
          </li>
          <li className="px-2">
            <Link onClick={() => setIsOpen(false)} to={"/stories"}>
              Stories
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
