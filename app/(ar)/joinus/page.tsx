
import Image from "next/image";
import {
  Navbar,
  Hero,

  CTA,
  Footer,
} from "../../components";
import DownloadApp from "../../components/DownloadApp";
import Faq from "../../components/Faq";
import Features from "../../components/Features";
import Intro from "../../components/Intro";
import Sectionbanner from "../../components/Sectionbanner";
import Services from "../../components/Aboutus";
import Slider from "../../components/TestimonialSlider";
import { app1, downloadApp, logowhitew } from "@/public";
import ContactForm from "../../components/EmbededComponent";
import { joinUscontactForm } from "../../constants";
import EmbededComponent from "../../components/EmbededComponent";

export default function Home() {
  return (

    <div className="paddingX">

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0  grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex relative h-[200px]  lg:py-12 ">
                <img src="../titlebanner.png"
                  className="z-[10] w-full  rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[40px]" alt="image" />
                <div className="w-full absolute flex-col top-[40%]  my-auto lg:ml-[50px]  z-[11]  flex items-center justify-center  ">
                  <h1 className=" text-right mb-8 text-3xl font-bold text-white">انضم الينا</h1>
                  <Image
                    src={app1}
                    alt=""
                    width={0}
                    height={0}
                    className=" hidden md:inline-block md:w-[70%] md:h-[70%]  md:z-[0]"
                  />

                </div>
              </div>

            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 text-right" dir="rtl">

              <div
                className="flex h-full items-center w-full rounded-lg pl-2 z-[25] bg-dimWhite border-primaryOne border-t-8 border-b-8 border-r-1 border-l-1 shadow-lg shadow-gray-300 p-1 text-center text-black lg:pl-1 lg:text-left">
                <EmbededComponent url={joinUscontactForm} />
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}
