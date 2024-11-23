import React, { useState } from "react";
// import Image1 from "../assets/image1.avif";
import { image1, s } from "../assets/index";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { name: "Who We Are", link: "WhoWeAre" },
    { name: "Founder", link: "TheFounder" },
    { name: "Values", link: "values" },
    { name: "Policies", link: "OurPolicies" },
    { name: "DCT Guild", link: "DctGuild" },
    { name: "Contact", link: "Footer" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${image1})`,
        height: "700px",
      }}
    >
      <nav className="flex justify-between items-center p-5 md:p-20">
        {/* Logo Section */}
        <div className="uppercase text-yellow-400 font-bold text-xl md:text-2xl flex items-center gap-2">
          <img src={s} alt="Logo" className="w-28 h-28 rounded-md" />
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex">
          <ul className="flex gap-10 text-lg text-[#ff7e00] items-center font-helvetica-bold">
            {navLink.map((data, index) => (
              <li key={index} className="cursor-pointer hover:text-white">
                <Link to={data.link} smooth={true} spy={true}>
                  {data.name}
                </Link>
              </li>
            ))}
            <li className="cursor-pointer">
              <a href="https://www.instagram.com/dctinqa" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://www.linkedin.com/in/imane-o-587b8579/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </li>
            {/* <li className="cursor-pointer">
              <FaTwitterSquare size={24} />
            </li> */}
          </ul>
        </div>

        {/* Mobile Navbar Toggle Button */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-orange-400 text-white p-5 absolute top-36 left-0 right-0 z-10">
          <ul className="flex flex-col gap-4 items-center font-helvetica-light">
            {navLink.map((data, index) => (
              <li key={index}>
                <Link to={data.link} onClick={toggleMenu} className="text-white cursor-pointer">
                  {data.name}
                </Link>
              </li>
            ))}
            <ul className="flex flex-row gap-5">
            <li>
            <a href="https://www.instagram.com/dctinqa" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/imane-o-587b8579/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <FaTwitterSquare size={24} className="cursor-pointer" />
            </li>
            </ul>
          </ul>
        </div>
      )}

      {/* Hero Text Section */}
      <div className="font-helvetica-bold text-4xl md:text-6xl text-[#ff7e00] uppercase mt-20 ml-10 md:mt-36 md:ml-40">
        initiate <br /> elevate <br /> catalyse
      </div>
    </section>
  );
};

export default Home;
