
import Image from "next/image";
import {
  Navbar,
  Hero,
 
  CTA,
  Footer,
} from "../../../components";
import DownloadApp from "../../../components/DownloadApp";
import Faq from "../../../components/Faq";
import Features from "../../../components/Features";
import Intro from "../../../components/Intro";
import Sectionbanner from "../../../components/Sectionbanner";
import Services from "../../../components/Aboutus";
import Slider from "../../../components/TestimonialSlider";
import { logowhitew } from "@/public";
import ContactForm from "../../../components/EmbededComponent";
import { enprivacyPage, entermsPage } from "@/app/constants";
import EmbededComponent from "../../../components/EmbededComponent";

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
                <EmbededComponent url={entermsPage} />
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}
