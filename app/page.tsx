
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
} from "./components";
import DownloadApp from "./components/DownloadApp";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Intro from "./components/Intro";
import ManyShops from "./components/ManyShops";
import Sectionbanner from "./components/Sectionbanner";
import Services from "./components/Services";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className=" bg-dimWhite w-full overflow-hidden font-tajawal ">
      <Intro/>
      <header className=" flexCenter ">
        <nav className="boxWidth  z-10 ">
          <Navbar />
        </nav>
      </header>
      <section className=" flexStart ">
        <section className="boxWidth creativebanner">
          <Hero />
        </section>
      </section>
      <section className=" flexStart">
        <section className="boxWidth">
          <div className="paddingX bg-ttu z-0">
          {/* <Stats /> */}
          {/* <Business /> */}
          <Services/>
          <Sectionbanner/>
          <Features/>
          {/* <Billing />
          <CardDeal />
          <ManyShops/> */}
          {/* <Testimonials /> */}
          <Slider/>
          {/* <Clients /> */}
          <CTA />
          <Billing />
          <Faq/>
          <DownloadApp/>
          </div>
          <Footer />
        </section>
        
      </section>
      
    </main>
  );
}
