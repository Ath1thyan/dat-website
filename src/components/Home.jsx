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
      <nav className="flex justify-between p-5 md:p-20 items-center">
        <div className="uppercase text-yellow-400 font-bold text-xl md:text-2xl flex items-center gap-2">
          <img src={s} alt="" className="w-28 h-28 rounded-md" />
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-4 md:gap-8 text-[#ff7e00] items-center font-helvetica-bold">
            {navLink.map((data, index) => (
              <li key={index} className="cursor-pointer">
                <Link
                  to={data.link}
                  aria-current="page"
                  smooth={true}
                  spy={true}
                >
                  {data.name}
                </Link>
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
      <div className="font-helvetica-bold text-4xl md:text-6xl text-[#ff7e00] uppercase mt-20 ml-10 md:mt-36 md:ml-40">
        initiate <br /> elevate <br /> catalyse
      </div>
    </section>
  );
};

export default Home;
