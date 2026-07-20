import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Cta = () => {
  return (
    <section className="dark:text-white dark:bg-gray-900 py-10">
      <div className="px-5 md:px-10 text-center">
        <h1 className="max-w-3xl mx-auto font-heading font-bold text-4xl md:text-5xl leading-tight tracking-tight text-center mb-5">
          Stop planning to be organized.
          <br />
          <span className="text-indigo-600">Start now.</span>
        </h1>
        <p className="text-center text-lg max-w-lg mx-auto mb-5 font-body leading-relaxed tracking-wide dark:text-gray-300">
          It takes 30 seconds to add your first task. No account required to try
          it.
        </p>
        <NavLink to="/login" className="px-3.5 w-fit py-2 rounded-xl flex items-center mx-auto bg-indigo-500 text-lg">
          Open Mindspace free <ArrowRight className="size-5" />
        </NavLink>
      </div>
    </section>
  );
};

export default Cta;
