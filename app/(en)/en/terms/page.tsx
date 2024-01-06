
import Image from "next/image";
import {
  Navbar,
  Hero,
  Stats,
  Billing,
  Business,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "../../../components";
import DownloadApp from "../../../components/DownloadApp";
import Faq from "../../../components/Faq";
import Features from "../../../components/Features";
import Intro from "../../../components/Intro";
import ManyShops from "../../../components/ManyShops";
import Sectionbanner from "../../../components/Sectionbanner";
import Services from "../../../components/Services";
import Slider from "../../../components/Slider";
import { logowhitew } from "@/public";
import ContactForm from "../../../components/ContactForm";
import { enprivacyPage } from "@/app/constants";

export default function Home() {
  return (

    <div className="paddingX">

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0  grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex relative h-[200px] sm:h-[40%] lg:py-12 ">
                <img src="../titlebanner.png"
                  className="z-[10] w-full  rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
                <div className="w-full absolute flex-col top-[30%]  my-auto lg:ml-[50px]  z-[11]  flex items-center justify-center  ">
                  <Image
                    src={logowhitew}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[10%] h-[10%]  z-[5]"
                  />
                  <h1 className=" text-right mb-8 text-3xl font-bold text-white">Terms & Conditions</h1>
                </div>
              </div>

            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 text-right" dir="rtl">
              <div
                className="flex h-full items-center rounded-lg bg-dimWhite border-primaryOne border-t-8 border-b-8 border-r-1 border-l-1 shadow-lg shadow-gray-300 p-6 text-center text-black lg:pl-12 lg:text-left">
                <ContactForm url={enprivacyPage}/>
                <div className="lg:pl-12">
                  <h2 className=" text-right mb-8 text-3xl font-bold"></h2>
                  <p className="mb-8 pb-2 lg:pb-0 text-right text-black">

                  </p>

                  {/* <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
              <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best team
              </p>

              <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best quality
              </p>

              <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best experience
              </p>
            </div> */}

                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}
