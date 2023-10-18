import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2  lg:bottom-8 w-full overflow-hidden z-40">
      <div className="container mx-auto">
        {}
        <div className="w-full
         bg-black/20 h-[86px]
         backdrop-blur-2x1
         rounded-full
          max-w-[460px]
          mx-auto
          px-5
          py-5
          flex
          justify-between
          text-2x1
           text-white/50">
          <Link
            to="home"
            offset={-200}
            smooth={true}
            spy={true}
            activeClass="active"
            className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            smooth={true}
            spy={true}
            activeClass="active"
            className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            smooth={true}
            spy={true}
            activeClass="active"
            className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            smooth={true}
            spy={true}
            activeClass="active"
            className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            activeClass="active"
            className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
