
import {

  CTA,
  Hero,

} from "../components";
import Contact from "../components/Contact";
import DownloadApp from "../components/DownloadApp";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Sectionbanner from "../components/Sectionbanner";
import TestimonialSlider from "../components/TestimonialSlider";
import { enfeedback, feedback } from "../constants";
import Aboutus from "../components/Aboutus";

export default function Home() {
  return (

    <>
      <section className=" flexStart ">
        <section className="boxWidth creativebanner">
          <Hero />
        </section>
      </section>
      <div className="paddingX">
        <Aboutus />
        <Sectionbanner />
        <Features />
        <TestimonialSlider  />
        <CTA />
        <Contact />
        <Faq />
        <DownloadApp />


      </div>
    </>

  );
}
