import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const deviceWidth = window.innerWidth;
  return (
    <nav className={"nav" + (isScrolled ? " nav-scrolled" : "")}>
      <ul className="nav-items">
        <li className="nav-head">
          <a className="" href="#hero">
            Mukul Tiwari
          </a>
        </li>
        {deviceWidth >= 769 && (
          <li className="nav-home nav-links nav-first-link">
            <a href="#hero">Home</a>
          </li>
        )}
        {deviceWidth >= 769 && (
          <li className="nav-about nav-links">
            <a href="#About">About</a>
          </li>
        )}
        {deviceWidth >= 769 && (
          <li className="nav-about nav-links">
            <a href="#Projects">Projects</a>
          </li>
        )}
        {deviceWidth >= 769 && (
          <li className="nav-contact nav-links nav-last-link">
            <a href="#Contact">Contact</a>
          </li>
        )}
        {deviceWidth < 769 && <MenuButton />}
      </ul>
    </nav>
  );
};

export default Navbar;
