import { NavLink } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Images from "../assets/image";

const Hero = () => {
  return (
    <section className="md:px-12 my-20">
      <div className="h-120 max-w-6xl px-5">
        <div className="w-full h-full items-center justify-center grid md:grid-cols-2">
          <div className="md:row-span-3 px-3">
            <div className="w-40 h-8 bg-indigo-200/20 rounded-full flex gap-2 p-2 text-xs font-semibold items-center justify-center text-indigo-500 mb-5 font-body">
              <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
              Now In Public Beta
            </div>

            <h1 className="text-4xl max-w-3xl font-heading font-bold leading-10 mb-3">
              The task manager <br />{" "}
              <span className="text-indigo-600"> that actually</span> <br />
              gets out of the way.
            </h1>
            <p className="text-sm leading-relaxed max-w-sm mb-5 font-body">
              <strong className="text-sm">
                Mind<span className="text-xs">Space</span>
              </strong>{" "}
              strips away everything except what matters — your tasks, your
              categories, your progress. No bloat. No friction. Just flow.
            </p>
            <div className="w-100 md:w-40 flex  md:flex-col gap-3 mb-3">
              <NavLink className="border flex justify-center px-4 py-2 text-xs gap-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors ease-in-out duration-200">
                Start for free <ArrowRight className="size-4" />
              </NavLink>
              <NavLink className="border justify-center border-gray-400/30 flex text-xs px-4 py-2 rounded-lg hover:bg-gray-300/20 transition-colors ease-in-out duration-200">
                See how it works
              </NavLink>
            </div>
            <div className="w-70 items-center flex justify-between">
              <div className="relative ">
                <span className="absolute border-2 border-white p-1.5 -top-3.5 rounded-full bg-indigo-200 text-xs">
                  MD
                </span>
                <span className="absolute border-2 border-white left-7 -top-3.5 p-1.5 rounded-full bg-yellow-200 text-xs">
                  AP
                </span>
                <span className="absolute border-2 border-white left-13 -top-3.5 p-1.5 rounded-full bg-green-200 text-xs">
                  JP
                </span>
                <span className="absolute border-2 border-white left-19 -top-3.5 p-1.5 rounded-full bg-purple-200 text-xs">
                  PT
                </span>
                <span className="absolute border-2 border-white left-25 -top-3.5 p-1.5 rounded-full bg-red-200 text-xs">
                  AY
                </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex gap-1 ">
                  <Star className="fill-amber-300 stroke-white size-4" />
                  <Star className="fill-amber-300 stroke-white size-4" />
                  <Star className="fill-amber-300 stroke-white size-4" />
                  <Star className="fill-amber-300 stroke-white size-4" />
                  <Star className="fill-amber-300 stroke-white size-4" />
                  <p className="text-xs">4.9</p>
                </div>
                <p className="text-[12px] text-gray-500/80">
                  Loved by 12,000+ teams
                </p>
              </div>
            </div>
          </div>
          <div className="md:row-span-1">
            <div className="h-full flex justify-center items-center p-10">
              <div className="w-full shadow-2xl p-3">
                <div className="w-full flex gap-5 mb-2 items-center">
                  <div className="flex-1 flex gap-1 items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex-5 py-1 px-2 rounded-lg bg-gray-300/40">
                    <p className="font-body text-xs text-gray-400">
                      app.Mindspace.io/tasks
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-1">
                    <img
                      src={Images.Planning}
                      alt="Logo icon"
                      className="w-5 h-5"
                    />
                    <h1 className="font-heading">
                      <strong>Mind</strong>
                      <span className="text-xs">Space</span>
                    </h1>
                  </div>
                  <div className="flex flex-col items-end mb-2">
                    <p className="font-body text-xs mb-1">2/4 done</p>
                    <span className="w-20 h-2 rounded-full bg-gray-300 flex">
                      <span className="w-10 h-2 rounded-full bg-indigo-600"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
