"use client";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { menu,close, logoWhite } from "@/public";

const CTA = () => {
  const [toggle, setToggle] = useState(false);


return (
  <section dir="rtl"
    className="flexCenter relative marginY py-10 px-5 sm:flex-row flex-col  bg-gradient-to-r 
    from-primaryOne to-primaryOne bg-opacity-50  rounded-[20px] box-shadow"
  >
    <div className="flex-1 flex flex-col">
      {/* <h6 className="heading2">انضم إلينا وكُن جزءًا من رواد السوق الرقمي، حيث نقدم لك الفرصة للابتكار والتحول. </h6> */}
      <p className=" text-white text-[30px]  mt-5">
      انضم إلينا وكُن جزءًا من رواد السوق الرقمي، حيث نقدم لك الفرصة للابتكار والتحول. 
      </p>
    </div>

    <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button styles={`mt-10`}
      onClick={()=>setToggle(!toggle)} />
    </div>
   
    
    {/* <div className="flex flex-1 justify-end items-center">
        
    <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          priority={true}
          className="object-contain"
          onClick={() => setToggle(!toggle)}
        />
       </div> */}
       <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute bg-primaryOne   min-w-full my-auto mx-auto rounded-xl sidebar z-50`}
        >
 {/* <a href="javascript:void( window.open( 'https://woocommerce-1184222-4160210.cloudwaysapps.com/form/', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "> Appointment Request Form </a> */}
 <div className="hidden  bg-primaryOne z-90  sm:flex sm:flex-1 justify-center items-center ">
 <Image
          src={ close }
          alt="menu"
          width={0}
          height={0}
          priority={true}
          className="object-contain w-[10%] h-[10%] "
          onClick={() => setToggle(!toggle)}
        />
 <Image
          src={ logoWhite }
          alt="menu"
          width={0}
          height={0}
          priority={true}
          className="object-contain w-[90%] h-[90%] "
          onClick={() => setToggle(!toggle)}
        />
        </div>
        <div className="w-full sm:w-[50%] ">
        <iframe
 
 id="JotFormIFrame"
 title="Appointment Request Form"
 onLoad={() => window.parent.scrollTo(0, 0)}
	
 allow="geolocation; microphone; camera"
 src="https://woocommerce-1184222-4160210.cloudwaysapps.com/form/"
 frameBorder="0"
 style={{ minWidth: '100%', maxWidth: '100%', height: '400px', border: 'none' }}
 scrolling="yes"  // Enable scrolling
></iframe>
        </div>
 

      <script type="text/javascript">
        {`
          // Add the script logic here (you can copy it from your provided code)
        `}
      </script>
   

          </div>

  </section>
);
}
export default CTA;
