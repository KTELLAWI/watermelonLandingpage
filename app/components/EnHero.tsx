"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { apple, back2, googlewhite, imageshaper, robot2 } from "../../public";
import { applestoreUrl, enHeroDescription, googleplayStoreUrl } from "../constants";
import Link from "next/link";

const EnHero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col paddingY creativebanner relative w-full">
      <div className="w-full h-full absolute  z-100 bottom-0 top-0 creativebanner">
      <Image
        src={imageshaper}
        alt="" 
        width={0}
        height={0}
        className="w-[100%] h-[100%] z-0 "
      />
      </div>
      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 paddingX"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" width={32} height={32} priority={true} />
          <p className="paragraph ml-2">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div dir="ltr" className="flex flex-row justify-between items-center w-full">
          <h1 className="  flex-1 font-tajawal font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]
           text-white  ">
          Water<span className= "underlined underline-clip text-white">melon</span> <br className="sm:block hidden " />{" "}
            <span className=" text-gradient text-right"></span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-tajawal text-right font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
           
        </h1>
        <p  className="paragraph2 text-white max-w-[470px] mt-5 font-tajawal  text[25px] mx-auto px-2">
        {enHeroDescription}
        </p>
        <div className="flex  w-fullflex-row px-3 space-x-2 sm:mt-7 mx-auto mt-3">
        <Link href={applestoreUrl}>
        <Image
          src={apple}
          alt="google_play"
          width={0}
          height={0}
          className="object-contain w-[100%] h-[100%] mr-5 cursor-pointer"
        />
        </Link>
        <Link href={googleplayStoreUrl}>
        <Image
        src={googlewhite}
        alt=""
        width={0}
        height={0}
        className="w-[100%] h-[100%] mr-5 z-[5]"
      />
       </Link>
      </div>
      </motion.div>

      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
 <div className="relative">
    <Image
      src={back2}
      alt=""
      className="absolute top-0  w-[90%] h-full spinnerimage"
      priority={true}
    />
    <Image
      src={robot2}
      alt=""
      className="  w-[90%] h-[90%] z-100"
      priority={true}
    />
  </div>       

       
      </motion.div>

      <div className="ss:hidden flexCenter">
        {/* <GetStarted /> */}
        
      </div>
    
    </section>
  );
};

export default EnHero;
