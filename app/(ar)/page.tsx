
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
} from "../components";
import DownloadApp from "../components/DownloadApp";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Intro from "../components/Intro";
import ManyShops from "../components/ManyShops";
import Sectionbanner from "../components/Sectionbanner";
import Services from "../components/Services";
import Slider from "../components/Slider";
import { enfeedback, feedback } from "../constants";

export default function Home() {
  return (

    <>
      <section className=" flexStart ">
        <section className="boxWidth creativebanner">
          <Hero />
        </section>
      </section>
      <div className="paddingX">
        {/* <Stats /> */}
        {/* <Business /> */}
        <Services />
        <Sectionbanner/>
        <Features />
        {/* <Billing />
          <CardDeal />
          <ManyShops/> */}
        {/* <Testimonials /> */}
        <Slider slides={enfeedback}/>
        {/* <Clients /> */}
        <CTA />
        <Billing />
        <Faq />
        <DownloadApp />


      </div>
    </>

  );
}
