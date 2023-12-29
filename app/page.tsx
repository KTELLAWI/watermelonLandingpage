
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
import Services from "./components/Services";

export default function Home() {
  return (
    <main className=" bg-dimWhite w-full overflow-hidden font-tajawal ">
      <Intro/>
      <header className=" flexCenter ">
        <nav className="boxWidth z-10 ">
          <Navbar />
        </nav>
      </header>
      <section className=" bg-primaryOne flexStart">
        <section className="boxWidth">
          <Hero />
        </section>
      </section>
      <section className=" bg-dimWhite paddingX flexStart">
        <section className="boxWidth">
          {/* <Stats /> */}
          {/* <Business /> */}
          <Services/>
          <Features/>
          {/* <Billing />
          <CardDeal />
          <ManyShops/> */}
          <Testimonials />
          {/* <Clients /> */}
          <CTA />
          <Faq/>
          <DownloadApp/>
         
        </section>
        
      </section>
      <Footer />
    </main>
  );
}
