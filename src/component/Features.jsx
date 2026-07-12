import {
  Calendar,
  Clock,
  Star,
  List,
  CheckCircle,
  PlusSquare,
} from "lucide-react";

const Feature = () => {
  const feature = [
    {
      icon: Calendar,
      title: "Smart scheduling",
      desc: "Assign due dates in seconds. Mindspace surfaces what's urgent so nothing slips through the cracks.",
    },
    {
      icon: Clock,
      title: " Real-time progress",
      desc: "A live progress bar tells you exactly where you stand. Hit milestones with confidence, not guesswork.",
    },
    {
      icon: Star,
      title: "Category badges",
      desc: " Label tasks as Work, Personal, Health, Finance, or Learning. Filter with one click, stay laser-focused.",
    },
    {
      icon: List,
      title: "Instant search",
      desc: " Find any task by name or category in milliseconds. No folders, no nesting — just type and go.",
    },
    {
      icon: PlusSquare,
      title: "No-friction added",
      desc: "Instant creation. Type your task, hit Enter, and keep moving. No pop-ups, no loading spinners, no delays.",
    },
    {
      icon: CheckCircle,
      title: "Satisfying completion",
      desc: " Check off a task and watch the strikethrough animate. Dopamine, delivered — a small ritual that builds momentum.",
    },
  ];

  return (
    <section className="dark:bg-gray-900 dark:text-white py-10">
      <div className="flex flex-col items-center px-5 md:px-10">
        <div className="bg-indigo-300/50 dark:bg-indigo-700 px-3 py-1 rounded-full mb-7">
          <h3 className="font-heading leading-tight tracking-widest font-semibold text-lg text-indigo-500 dark:text-indigo-200 ">
            Features
          </h3>
        </div>
        <h1 className="font-heading font-bold mb-3 text-4xl md:text-6xl leading-tight md:max-w-xl text-center">
          Everything you need. Nothing you don't.
        </h1>
        <p className="text-center text-sm md:text-2xl leading-relaxed font-body text-gray-400">
          Mindspace is deliberately simple. Every feature earns its place.
        </p>
        <div className="mt-10 grid shrink gap-10 sm:grid-cols-2 md:grid-cols-3">
          {feature.map((f, index) => {
            const Icon = f.icon;
            return (
              <div
                key={index}
                className="p-7 border border-gray-400/70 rounded-xl hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out"
              >
                <div className="bg-indigo-300/40 w-12 h-12 mb-4 dark:bg-indigo-500 dark:text-indigo-200 text-indigo-500 rounded-xl flex items-center justify-center">
                  <Icon className="size-6 " />
                </div>
                <h3 className="font-heading leading-tight mb-3 text-xl font-bold">
                  {f.title}
                </h3>
                <p className="font-body leading-relaxed text-gray-400 text-base ">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
