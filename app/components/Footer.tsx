import { logoWhite } from "../../public";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";

const Footer = () => (
  <section className="flexCenter  flex-col bg-primaryOne rounded-tl-[18px] rounded-tr-[18px] border-t-dimWhite  shadow-lg shadow-bl " dir="rtl">
    <div className="flexCenter md:flex-row flex-col mb-0 w-full">
      <div className=" flex flex-col justify-center align-middle items-center">
        <Image
          src={logoWhite}
          alt="hoobank"
          width={266}
          height={72.14}
          priority={true}
          className="object-contain"
        />
        {/* <p className="paragraph mt-4 max-w-[312px]">
          A new way to make the payments easy, reliable and secure.
        </p> */}
      </div>

      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h1>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    <div  dir="rtl" className="w-full flex justify-center items-center mx-auto  flex-col pt-0  border-t-[#3F3E45]">
      <p className="font-poppins font-normal  text-[18px] leading-[27px] text-white text-center mb-2" >
        Copyright Ⓒ 2023 WaterMelon. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-3 p-3 text-right" dir="rtl">
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
