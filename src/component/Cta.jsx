import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-10 dark:bg-[#0d1117] bg-gray-100/50 dark:text-white">
      <div className="px-5 md:px-10 text-center max-w-3xl mx-auto">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl max-w-3xl leading-tight tracking-tight mb-3">
          Stop planning to be organized.
          <br/>
          <span className="text-indigo-500">Start now.</span>
        </h1>
        <p className="font-body text-lg font-medium tracking-wide leading-relaxed max-w-3xl mb-7">It takes 30 seconds to add your first task. No account required to try it.</p>
        <NavLink to="/signup" className="flex items-center w-fit px-3 py-1.5 bg-indigo-600 text-white text-lg font-body rounded-lg mx-auto hover:bg-indigo-500 transition-colors ease-linear duration-200">
          Open Mindspace free <ArrowRight className="size-5"/>
        </NavLink>
      </div>
    </section>
  );
};

export default Cta;
