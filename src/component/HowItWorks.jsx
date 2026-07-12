const HowItWorks = () => {
  const howItWorks = [
    {
      step: "01",
      title: "Add your tasks",
      desc: "Type a task name, pick a category, set a due date (optional), and hit Enter. Your task is in the list instantly — no saving, no confirmation dialog.",
    },
    {
      step: "02",
      title: "Filter by what matters",
      desc: "Switch between All Tasks, In Progress, and Completed views in one click. Search by keyword or category to zero in on exactly what you need.",
    },
    {
      step: "03",
      title: "Check it off, fell good",
      desc: "Mark tasks complete with a single click. Watch your progress bar fill up. When everything's done, you'll see 'All caught up!' — the best message in productivity.",
    },
  ];

  return (
    <section className="py-15 dark:bg-gray-900 dark:text-white">
      <div className="px-5 md:px-10 flex flex-col items-center">
        <div className="py-1 px-3 bg-indigo-300/50 dark:bg-indigo-500 rounded-2xl mb-7">
          <h3 className="font-heading leading-tight tracking-widest text-lg font-semibold text-indigo-500 dark:text-indigo-200">
            How it works
          </h3>
        </div>
        <h1 className="font-heading font-bold text-center text-4xl md:text-6xl mb-15">
          Up and running in 30 seconds.
        </h1>
        <div className=" relative p-5 max-w-3xl flex flex-col gap-10">
          <div className="absolute left-13 top-5 bottom-5 w-0.5 bg-linear-to-b from-indigo-500 via-purple-500 to-green-500 -z-10" />
          {howItWorks.map((h, i) => (
            <div key={i} className="flex justify-between gap-5">
              <div className="w-17 h-17 shrink-0 rounded-2xl border bg-white dark:bg-gray-900 flex justify-center items-center">
                <p className="font-body font-semibold text-2xl leading-relaxed ">
                  {h.step}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-heading font-semibold text-2xl">
                  {h.title}
                </h4>
                <p className="text-[15px] font-body leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
