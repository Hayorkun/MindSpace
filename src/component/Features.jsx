import { Calendar, Clock, Star, List, CheckCircle, PlusSquare } from "lucide-react";

const Feature = () => {
  return (
    <section className="my-15">
      <div className="flex flex-col items-center px-6 md:px-12">
        <div className="bg-indigo-300/50 px-5 py-1 rounded-full mb-7">
          <p className="font-body leading-relaxed font-semibold text-sm text-indigo-500">
            Features
          </p>
        </div>
        <h1 className="font-heading font-bold mb-3 text-4xl md:text-6xl leading-tight md:max-w-xl text-center">
          Everything you need. Nothing you don't.
        </h1>
        <p className="text-center tracking-wider text-sm font-semibold md:text-2xl leading-relaxed font-body text-gray-400">
          Mindspace is deliberately simple. Every feature earns its place.
        </p>
        <div className="my-10 grid gap-7 md:grid-cols-3">
          <div className="p-7 border border-gray-400/70 rounded-xl hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
            <div className="bg-indigo-300/40 w-15 h-15 mb-4 text-indigo-500 rounded-xl flex items-center justify-center">
              <Calendar className="size-7 " />
            </div>
            <h3 className="font-heading leading-tight mb-3 text-xl font-bold">
              Smart scheduling
            </h3>
            <p className="font-body leading-relaxed text-gray-400 text-lg ">
              Assign due dates in seconds. Mindspace surfaces what's urgent so
              nothing slips through the cracks.
            </p>
          </div>
          <div className="p-7 border border-gray-400/70 rounded-xl hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
            <div className="bg-indigo-300/40 w-15 h-15 mb-4 text-indigo-500 rounded-xl flex items-center justify-center">
              <Clock className="size-7 " />
            </div>
            <h3 className="font-heading leading-tight mb-3 text-xl font-bold">
              Real-time progress
            </h3>
            <p className="font-body leading-relaxed text-gray-400 text-lg ">
              A live progress bar tells you exactly where you stand. Hit
              milestones with confidence, not guesswork.
            </p>
          </div>
          <div className="p-7 border border-gray-400/70 rounded-xl hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
            <div className="bg-indigo-300/40 w-15 h-15 mb-4 text-indigo-500 rounded-xl flex items-center justify-center">
              <Star className="size-7 " />
            </div>
            <h3 className="font-heading leading-tight mb-3 text-xl font-bold">
              Category badges
            </h3>
            <p className="font-body leading-relaxed text-gray-400 text-lg ">
              Label tasks as Work, Personal, Health, Finance, or Learning.
              Filter with one click, stay laser-focused.
            </p>
          </div>
          <div className="p-7 border border-gray-400/70 rounded-xl hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
            <div className="bg-indigo-300/40 w-15 h-15 mb-4 text-indigo-500 rounded-xl flex items-center justify-center">
              <List className="size-7 " />
            </div>
            <h3 className="font-heading leading-tight mb-3 text-xl font-bold">
              Instant search
            </h3>
            <p className="font-body leading-relaxed text-gray-400 text-lg ">
             Find any task by name or category in milliseconds. No folders, no nesting — just type and go.
            </p>
          </div>
          <div className="p-7 border border-gray-400/70 rounded-xl hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
            <div className="bg-indigo-300/40 w-15 h-15 mb-4 text-indigo-500 rounded-xl flex items-center justify-center">
              <PlusSquare className="size-7 " />
            </div>
            <h3 className="font-heading leading-tight mb-3 text-xl font-bold">
                No-frction added
            </h3>
            <p className="font-body leading-relaxed text-gray-400 text-lg ">
              Add a task with a single keystroke. Press Enter, it's in. No modal, no loading spinner, no delay.
            </p>
          </div>
          <div className="p-7 border border-gray-400/70 rounded-xl hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
            <div className="bg-indigo-300/40 w-15 h-15 mb-4 text-indigo-500 rounded-xl flex items-center justify-center">
              <CheckCircle className="size-7 " />
            </div>
            <h3 className="font-heading leading-tight mb-3 text-xl font-bold">
                Satisfying completion
            </h3>
            <p className="font-body leading-relaxed text-gray-400 text-lg ">
              Check off a task and watch the strikethrough animate. Dopamine, delivered — a small ritual that builds momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
