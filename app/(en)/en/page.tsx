
import EnHero from "@/app/components/EnHero";
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
import CustomLayout from "./layout";
import EnContact from "@/app/components/enContact";
import EnAboutus from "@/app/components/EnAboutus";
import EnFeatures from "@/app/components/EnFeatures";
import { enfeedback } from "@/app/constants";
import EnSlider from "@/app/components/EnSlider";
import EnCTA from "@/app/components/EnCTA";
import EnFaq from "@/app/components/EnFaq";
import EnDownloadApp from "@/app/components/EnDownloadApp";

export default function Home() {
  return (

    <>
      <section className=" flexStart ">
        <section className="boxWidth creativebanner">
          <EnHero />
        </section>
      </section>
      <div className="paddingX">

        <EnAboutus />

        <Sectionbanner />
        <EnFeatures />

        <EnSlider/>

        <EnCTA />
        <EnContact />

        <EnFaq />
        <EnDownloadApp />


      </div>
    </>

  );
}
