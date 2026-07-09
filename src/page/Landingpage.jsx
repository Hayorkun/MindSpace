import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section id="feature"></section>
      </main>
    </div>
  );
};

export default LandingPage;
