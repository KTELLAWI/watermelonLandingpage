import { apple, googlewhite, logoWhite, phoneicon } from "../../public";
import { footerLinks, footerunderlogoTitle, socialMedia } from "../constants";
import Image from "next/image";
// rounded-tl-[18px] rounded-tr-[18px]
const Footer = () => (
  <section className="flexCenter relative flex-col z-[1500] bg-primaryOne  border-t-dimWhite pt-5 px-3 " dir="rtl">
     {/* <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#0F9887"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg> */}
      {/* <div className=" relative"> */}
      <div className="waves ">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    {/* </div> */}
    </div>
    <div className="flexCenter md:flex-row flex-col mb-0 w-full z-[2000]">
      <div className=" flex flex-col justify-center align-middle items-center sm:items-start sm:justify-start">
        <Image
          src={logoWhite}
          alt="hoobank"
          width={200}
          height={170}
          priority={true}
          className="object-contain"
        />
        <p className="font-tajawal mt-4 max-w-[312px] leading-4 justify-center text-white align-middle items-center sm:items-start sm:justify-start">
        {footerunderlogoTitle}
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-5">
        {footerLinks.map((footerlink) => (
          <div 
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-1 min-w-[150px]`}
          >
            <h1 className="font-tajawal font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h1>
            <ul  className="list-none mt-1">
              {footerlink.links.map((link, index) => link.name == "googleplay" || link.name == "apple" ? (
                 <li
                 key={link.name}
                 className={`font-tajawal font-normal  text-right text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer ${
                   index !== footerlink.links.length - 1 ? "mb-4" : "mb-1"
                 }`}
               >    <a href={link.link}>
                   <Image
                   src={ link.name == "apple" ? apple : googlewhite}
                   alt=""
                   width={128.86}
                   height={42.05}
                   className="object-contain  cursor-pointer"
                 />
                 </a>
                 </li>
              ) :

               link.name == "location" || link.name == "email"  || link.name== "phone" ? (

             
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-1" : "mb-3"
                  }`}
                > <div className="flex  ">
                  
                  <Image
                  alt=""
                    // @ts-ignore
                    src={link?.image}
                    width={20.86}
                    height={20.05}
                    className="object-contain mx-3 "
                  />
                 <a>{link.link}</a>
                 </div>

                </li>
              )
              :
              (
                <li
                key={link.name}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer ${
                  index !== footerlink.links.length - 1 ? "mb-1" : "mb-3"
                }`}
              > 
                
             
               <a href={`/${link.link}`}>{link.name}</a>
              

              </li>
              )
          
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div  dir="rtl" className="w-full flex-col sm:flex items-center mx-auto border-t-4 border-t-white pt-1 justify-between ">
      <p className="font-poppins font-normal  text-[18px] leading-[27px] text-white text-center mb-2" >
         Ⓒ 2023 جميع الحقوق محفوظة وترميلون.
      </p>

      <div className="flex flex-row md:mt-0 mt-3 p-3 justify-center items-center " >
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={21}
            height={21}
            priority={true}
            className={`object-contain cursor-pointer hover:opacity-75 ${
              index !== socialMedia.length - 1 ? "ml-6" : "ml-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
