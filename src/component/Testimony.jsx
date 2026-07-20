import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimony = () => {
  const TESTIMONY = [
    {
      name: "Maya Chen",
      abbr: "MC",
      role: "Senior Product Designer, Vercel",
      desc: "I've tried Todoist, Things, TickTick — all great apps but all too complex for what I actually need. Mindspace is the first one where I just… use it. Every day.",
    },
    {
      name: "James Okafor",
      abbr: "JO",
      role: "Engineering Lead, Linear",
      desc: "The category badges are brilliant. I can see at a glance that I have 3 Work tasks and 2 Personal tasks without having to read a single word. That's great UX."
    },
    {
      name: "Sara Nilsson",
      abbr: "SN",
      role: "Head of Operations, Stripe",
      desc: "My team uses Jira for project work but Mindspace for personal accountability. It's become our default recommendation for anyone who asks 'what do you use for personal tasks?",
    },
  ];

  return (
    <section className="py-10 dark:bg-[#0d1117] dark:text-white bg-gray-100/50">
      <div className="px-5 md:px-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="bg-indigo-300/50 dark:bg-indigo-500 py-1 px-3 rounded-2xl mb-7"
        >
          <h3 className="text-indigo-500 dark:text-indigo-200 font-heading font-semibold leading-relaxed tracking-wide">
            Testimony
          </h3>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-heading text-4xl font-bold tracking-wide leading-tight md:text-5xl text-center mb-10"
        >
          People who actualy use it
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONY.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="border border-gray-600/50 dark:border-gray-400 p-5 rounded-xl"
            >
              <div className="flex gap-1 mb-3">
                <Star className="fill-amber-300 stroke-amber-300 size-4" />
                <Star className="fill-amber-300 stroke-amber-300 size-4" />
                <Star className="fill-amber-300 stroke-amber-300 size-4" />
                <Star className="fill-amber-300 stroke-amber-300 size-4" />
                <Star className="fill-amber-300 stroke-amber-300 size-4" />
              </div>
              <p className="mb-3 font-body">"{t.desc}"</p>
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full p-3 bg-indigo-200 dark:bg-indigo-600 font-body font-semibold">
                  {t.abbr}
                </span>
                <div>
                  <p className="font-body text-md font-semibold leading-relaxed">{t.name}</p>
                  <p className="font-body text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
