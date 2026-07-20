import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Feature from "../component/Features";
import HowItWorks from "../component/HowItWorks";
import Testimony from "../component/Testimony";
import Pricing from "../component/Pricing";
import Cta from "../component/Cta";
import Footer from "../component/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home" data-section>
          <Hero />
        </section>
        <section id="features" data-section>
          <Feature />
        </section>
        <section id="how-it-works" data-section>
          <HowItWorks />
        </section>
        <section id="testimony" data-section>
          <Testimony />
        </section>
        <section id="pricing" data-section>
          <Pricing />
        </section>
        <section id="get-started" data-section>
          <Cta />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
