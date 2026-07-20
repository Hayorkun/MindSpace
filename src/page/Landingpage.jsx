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
        <Hero />
        <section id="#feature">
          <Feature />
        </section>
        <section id="#how-it-works">
          <HowItWorks />
        </section>
        <Testimony />
        <section id="#pricing">
          <Pricing />
        </section>
        <Cta/>
        <Footer/>
      </main>
    </div>
  );
};

export default LandingPage;
