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
import ManyShops from "./components/ManyShops";

export default function Home() {
  return (
    <main className=" bg-dimWhite w-full overflow-hidden font-poppins">
      <header className="paddingX flexCenter">
        <nav className="boxWidth">
          <Navbar />
        </nav>
      </header>
      <section className=" bg-dimWhite flexStart">
        <section className="boxWidth">
          <Hero />
        </section>
      </section>
      <section className=" bg-dimWhite paddingX flexStart">
        <section className="boxWidth">
          {/* <Stats /> */}
          <Business />
          <Billing />
          <CardDeal />
          <ManyShops/>
          <Testimonials />
          {/* <Clients /> */}
          <CTA />
          <Faq/>
          <DownloadApp/>
          <Footer />
        </section>
      </section>
    </main>
  );
}
