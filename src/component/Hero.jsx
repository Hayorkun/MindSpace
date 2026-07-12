import { NavLink } from "react-router-dom";
import { ArrowRight, Star, SearchCode } from "lucide-react";
import Images from "../assets/image";
import { useState } from "react";

const Hero = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finalize Q3 product roadmap",
      category: "Work",
      date: "Jul 10",
      isCompleted: true,
    },
    {
      id: 2,
      title: "30mins morning run",
      category: "Health",
      date: "Jul 10",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Buy groceries for dinner",
      category: "Personal",
      date: "Jul 11",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Review monthly budget",
      category: "Finance",
      date: "Jul 11",
      isCompleted: false,
    },
  ]);

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  const categoryColors = {
    Work: "bg-purple-300/50 text-purple-700",
    Personal: "bg-green-300/50 text-green-700",
    Finance: "bg-blue-100 text-blue-700",
    Health: "bg-yellow-200/70 text-yellow-700",
  };

  const TEAMS = ["Linear", "Vercel", "Notion", "Figma", "Stripe", "Loom"];

  return (
    <section className="dark:bg-gray-900 dark:text-white py-15">
      <div className="">
        <div className="md:px-10 px-5 max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="md:flex-3 mb-5">
              <div className="w-34 h-5 rounded-full flex gap-2 text-xs font-semibold items-center justify-center text-indigo-500 bg-indigo-300/50 dark:bg-indigo-600 dark:text-indigo-200 mb-5 font-body">
                <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-200 rounded-full"></span>
                Now In Public Beta
              </div>

              <h1 className="text-4xl md:text-6xl max-w-3xl font-heading font-bold leading-tight mb-3">
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
              <div className="w-fit md:w-40 flex  md:flex-col gap-3 mb-4">
                <NavLink className="flex justify-center px-4 py-2 text-xs gap-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors ease-in-out duration-200">
                  Start for free <ArrowRight className="size-4" />
                </NavLink>
                <NavLink className="border justify-center border-gray-400/30 flex text-xs px-4 py-2 rounded-lg hover:bg-gray-300/20 dark:hover:bg-gray-700/40 transition-colors ease-in-out duration-200">
                  See how it works
                </NavLink>
              </div>
              <div className="w-70 z-10 items-center flex justify-between">
                <div className="relative text-black">
                  <span className="absolute border p-1.5 border-gray-300 -top-3.5 rounded-full bg-indigo-200 text-xs">
                    MD
                  </span>
                  <span className="absolute border left-7 border-gray-300  -top-3.5 p-1.5 rounded-full bg-yellow-200 text-xs">
                    AP
                  </span>
                  <span className="absolute border left-13 border-gray-300  -top-3.5 p-1.5 rounded-full bg-green-200 text-xs">
                    JP
                  </span>
                  <span className="absolute border left-19 border-gray-300  -top-3.5 p-1.5 rounded-full bg-purple-200 text-xs">
                    PT
                  </span>
                  <span className="absolute border left-25 border-gray-300  -top-3.5 p-1.5 rounded-full bg-red-200 text-xs">
                    AY
                  </span>
                </div>
                <div className="flex items-start flex-col">
                  <div className="flex gap-1 mb-1">
                    <Star className="fill-amber-300 stroke-amber-300 size-4" />
                    <Star className="fill-amber-300 stroke-amber-300 size-4" />
                    <Star className="fill-amber-300 stroke-amber-300 size-4" />
                    <Star className="fill-amber-300 stroke-amber-300 size-4" />
                    <Star className="fill-amber-300 stroke-amber-300 size-4" />
                    <p className="text-xs">4.9</p>
                  </div>
                  <p className="text-[8px] text-gray-500/80 dark:text-gray-300">
                    Built for speed and deep focus.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex-2">
              <div className="h-full flex justify-center items-center p-3">
                <div className="w-full bg-gray-900 dark:bg-white dark:shadow-white dark:text-black text-white shadow-md rounded-xl p-4">
                  <div className="w-full flex gap-3 mb-2 items-center">
                    <div className="flex-1 flex gap-1 items-center">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <div className="flex-5 flex items-center py-1 px-2 rounded-xl bg-gray-200">
                      <p className="font-body text-xs text-gray-500">
                        app.Mindspace.io/tasks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-start gap-1">
                      <img
                        src={Images.Planning}
                        alt="Logo icon"
                        className="w-5 h-5"
                      />
                      <h1 className="font-heading">
                        <strong>
                          Mind<span className="text-indigo-600">Space</span>
                        </strong>
                      </h1>
                    </div>
                    <div className="flex flex-col items-end mb-2">
                      <p className="font-body text-xs text-white dark:text-black mb-1">2/4 done</p>
                      <span className="w-20 h-2 rounded-full bg-gray-300 flex">
                        <span className="w-10 h-2 rounded-full bg-indigo-600"></span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex p gap-1 px-2 py-0.5 bg-gray-300/50 text-xs rounded-2xl">
                    <SearchCode className="size-4" />
                    <input
                      type="text"
                      placeholder="Search for tasks"
                      className="outline-0 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    {tasks.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => handleToggleComplete(t.id)}
                        className="flex gap-2  shadow-md border-2 border-gray-300/70 rounded-lg p-3 cursor-pointer transition-opacity duration-200"
                      >
                        <div>
                          <p
                            className={`font-body text-sm transition-all mb-2 ${t.isCompleted ? "line-through text-gray-400" : "text-gray-100 dark:text-gray-900"}`}
                          >
                            {t.title}
                          </p>
                          <div className="flex gap-2 items-center">
                            <span
                              className={`font-body text-xs py-1 px-2 rounded-md ${categoryColors[t.category] || "bg-gray-100 text-gray-700"}`}
                            >
                              {t.category}
                            </span>
                            <p className="font-body text-xs">{t.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 bg-gray-200/20 border-y dark:bg-gray-700/40 dark:border-gray-500 border-gray-300/60 py-10 flex flex-col gap-5 items-center justify-center">
          <h4 className="font-heading text-xl text-gray-400/70 leading-tight uppercase">
            Trusted By Teams At
          </h4>
          <div className="flex gap-12 max-w-2xl flex-wrap justify-center">
            {TEAMS.map((t, i) => (
              <p key={i} className="font-body text-2xl text-gray-400/70 font-bold">
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
