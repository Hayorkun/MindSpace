import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Feature from "../component/Features";
import HowItWorks from "../component/HowItWorks";
import Testimony from "../component/Testimony";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section id="feature">
          <Feature />
        </section>
        <section id="#how-it-works">
          <HowItWorks />
        </section>
        <Testimony/>
        <section id="pricing">

        </section>
      </main>
    </div>
  );
};

export default LandingPage;
