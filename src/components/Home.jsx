import React, { useState } from "react";
import Image1 from "../assets/image1.avif";
import LOGO from "../assets/logo.png";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { name: "Who We Are", link: "#" },
    { name: "Founder", link: "#" },
    { name: "Values", link: "#" },
    { name: "Policies", link: "#" },
    { name: "DCT Guild", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${Image1})`,
        height: "700px",
      }}
    >
      <nav className="flex justify-between p-5 md:p-20 items-center">
        <div className="uppercase text-yellow-400 font-bold text-xl md:text-2xl flex items-center gap-2">
          {/* <p>
            <span className="text-yellow-500">D</span>CT
          </p>
          <p>
            <span className="text-yellow-500">Thick</span>
            <br />
            Bold
          </p> */}
          <img src={LOGO} alt="" className="w-16 h-16 rounded-md shadow-md" />
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-4 md:gap-8 text-white items-center font-helvetica-light">
            {navLink.map((data, index) => (
              <li key={index}>
                <a href={data.link}>{data.name}</a>
              </li>
            ))}
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-yellow-400 text-white p-5">
          <ul className="flex flex-col gap-4 items-center font-helvetica-light">
            {navLink.map((data, index) => (
              <li key={index}>
                <a href={data.link} onClick={toggleMenu}>
                  {data.name}
                </a>
              </li>
            ))}
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
      )}
      <div className="font-helvetica-bold text-4xl md:text-6xl text-yellow-500 uppercase mt-20 ml-10 md:mt-36 md:ml-40">
        initiate <br /> elevate <br /> catalyse
      </div>
    </section>
  );
};

export default Home;
