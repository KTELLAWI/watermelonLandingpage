

// export default Navbar;
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../styles/animations";
import Image from "next/image";
import { close, logo, menu } from "../../public";
import { enavLinks, navLinks } from "../constants";
import LangluageSelector from "./LanguageSelector";
import Link from "next/link";

const EnNavbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav 
      className="w-full flex px-3    items-center  creativebanner border-none z-[100]  "
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div  className="rounded-bl-full py-1 rounded-br-full  bg-white  w-[180px] flex justify-center items-center"
       
      >
        <a href="/en">
      <Image src={logo} alt="hoobank" width={124} height={32} loading="eager" />
      </a>
      </div>
      <ul dir="ltr" className="list-none sm:flex hidden justify-end  items-center flex-1 ">
        {enavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-tajawal font-semibold cursor-pointer text-[16px] hover:text-secondary ${
              active === nav.title ? "text-secondary" : "text-white"
            } ${index === navLinks.length - 1 ? "ml-4" : "ml-4"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`/en/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <a className=" hidden sm:inline-block default-btn mx-8" href="/en/joinus">
                                    Join us
                                    <span className="top-[30px] left-[40px]"></span>
                                </a>
                                <LangluageSelector/>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          priority={true}
          className="object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div dir="ltr"
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primaryOne absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[350]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {enavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-secondary" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/en${nav.id}`} prefetch ={false} scroll={false}>{nav.title}</Link>

                {/* <a href={`/en/${nav.id}`}>{nav.title}</a> */}
              </li>
            ))}
            <a className=" hidden sm:inline-block default-btn mt-2" href="/en/joinus">
                                    Join us
                                    <span className="top-[30px] left-[40px]"></span>
                                </a>
                                <LangluageSelector/>
          </ul>
        </div>
      </div>
    </motion.nav>
    
  );
};

export default EnNavbar;