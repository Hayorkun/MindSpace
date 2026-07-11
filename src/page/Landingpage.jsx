import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Feature from "../component/Features";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section id="feature">
          <Feature/>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
