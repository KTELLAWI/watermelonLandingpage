"use client";
import { useState } from "react";
import Image from "next/image";
import { menu, close, logoWhite } from "@/public";
import { CTATitle } from "../constants";

const CTA = () => {
  const [toggle, setToggle] = useState(false);
  const refreshIframe = () => {
    const iframe: any = document.getElementById('JotFormIFrame');
    iframe.src = iframe.src; // Refresh the iframe by setting its source to the same URL
  };
  const handleToggle = () => {
    setToggle(!toggle);
    refreshIframe(); // Refresh the iframe URL when toggling
  };

  return (
    <section dir="rtl"
      className="flexCenter relative marginY py-10 px-5 sm:flex-row flex-col  bg-gradient-to-r 
    from-primaryOne via-gray-400 to-primarTwo bg-opacity-50  rounded-[20px] shadow-md "
    >
      <div className="flex-1 flex flex-col">
        <p className=" text-white text-[30px] text-center mt-5">
          {CTATitle}
        </p>
      </div>


      <div
        className={`${!toggle ? "hidden" : "flex"
          } p-6 absolute bg-primaryOne   min-w-full my-auto mx-auto rounded-xl sidebar z-50`}
      >
        {/* <a href="javascript:void( window.open( '', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "> Appointment Request Form </a> */}
        <div className="hidden  bg-primaryOne z-90  sm:flex sm:flex-1 justify-center items-center ">
          <Image
            src={close}
            alt="menu"
            width={0}
            height={0}
            priority={true}
            className="object-contain w-[10%] h-[10%] "
            onClick={handleToggle}
          />
          <Image
            src={logoWhite}
            alt="menu"
            width={0}
            height={0}
            priority={true}
            className="object-contain w-[90%] h-[90%] "
            onClick={handleToggle}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center sm:w-[50%] sm:flex sm:items-center sm:justify-center  sm:my-auto mx-auto ">

          <iframe

            id="JotFormIFrame"
            title="Appointment Request Form"
            //  onLoad={() => window.parent.scrollTo(0, 0)}


            src="https://woocommerce-1184222-4160210.cloudwaysapps.com/form"
            style={{ minWidth: '100%', maxWidth: '100%', height: '450px', border: 'none' }}
          // Enable scrolling
          ></iframe>
          <Image
            src={close}
            alt="close"
            width={0}
            height={0}
            priority={true}
            className=" sm:hidden object-contain w-[10%] h-[10%] "
            onClick={handleToggle}
          />
        </div>


    


      </div>

    </section>
  );
}
export default CTA;
