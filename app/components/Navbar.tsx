// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { navVariants } from "../styles/animations";
// import Image from "next/image";
// import { close, logo, menu } from "../../public";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);

//   return (
   
//     <motion.nav
//       className="w-full flex py-0 justify-between items-center navbar bg-primaryOne rounded-bl-[18px] rounded-br-[18px]"
//       variants={navVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//     >
//       {/* <div className=" rounded-bl-full rounded-br-full bg-white w-[180px] flex justify-center items-center"
       
//       >
//       <Image src={logo} alt="hoobank" width={124} height={32} loading="eager" />
//       </div> */}
//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
//               active === nav.title ? "text-secondary" : "text-white"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//             onClick={() => setActive(nav.title)}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <Image
//           src={toggle ? close : menu}
//           alt="menu"
//           width={28}
//           height={28}
//           priority={true}
//           className="object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-secondary" : "text-white"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../styles/animations";
import Image from "next/image";
import { close, logo, menu } from "../../public";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav 
      className="w-full flex px-3  justify-between items-center  creativebanner border-none  "
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div  className="rounded-bl-full py-1 rounded-br-full bg-white  w-[180px] flex justify-center items-center"
       
      >
      <Image src={logo} alt="hoobank" width={124} height={32} loading="eager" />
      </div>
      <ul dir="rtl" className="list-none sm:flex hidden justify-start  items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-tajawal font-semibold cursor-pointer text-[16px] hover:text-secondary ${
              active === nav.title ? "text-secondary" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-4" : "mr-4"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <a className=" hidden sm:inline-block default-btn mx-8" href="/joinus">
                                    انضم الينا
                                    <span className="top-[30px] left-[40px]"></span>
                                </a>
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

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primaryOne absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-secondary" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
    
  );
};

export default Navbar;