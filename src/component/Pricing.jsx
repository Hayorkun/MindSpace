import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Free",
      period: "forever",
      cta: "Get started",
      featured: false,
      price: "$0",
      desc: "Everything you need to get started and stay organized.",
      features: [
        "Unlimited tasks",
        "5 category labels",
        "Due date scheduling",
        "Search & filter",
        "Progress tracking",
      ],
    },
    {
      name: "Pro",
      period: "per month",
      cta: "Start Pro trial",
      featured: true,
      price: "$8",
      desc: "For power users who want more depth and flexibility.",
      features: [
        "Everything in free",
        "Unlimited categories",
        "Recurring tasks",
        "Priority levels",
        "Keyboard shortcut",
        "Data export (CSV)",
      ],
    },
    {
      name: "Team",
      period: "per user / month ",
      cta: "Contact sales",
      featured: false,
      price: "$18",
      desc: "Share, delegate, and track tasks across your whole team.",
      features: [
        "Everything in pro",
        "Shared workspace",
        "Task assignment",
        "Team progress view",
        "Admin controls",
        "Priority support",
      ],
    },
  ];

  return (
    <section className="py-10 dark:text-white dark:bg-gray-900">
      <div className="flex flex-col justify-center items-center px-5 md:px-10">
        <div className="bg-indigo-300/50 dark:bg-indigo-700 px-3 rounded-2xl py-1 mb-7">
          <h3 className="font-heading leading-tight tracking-widest font-semibold text-lg text-indigo-500 dark:text-indigo-200">
            Pricing
          </h3>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl tracking-wide leading-tight md:max-w-xl text-center font-bold mb-3">
          Simple, honest pricing.
        </h1>
        <p className="font-body text-center text-sm md:text-2xl text-gray-700 dark:text-gray-300">
          No annual lock-in. Cancel any time. The Free plan never expires.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-7 w-full">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-5 rounded-xl border border-gray-400 flex flex-col transition-all duration-200 hover:-translate-y-1 ${
                t.featured ? "bg-indigo-700 border-0 text-gray-200 " : "bg-white text-gray-700"
              }`}
            >
              {t.featured && (
                <span className="mb-2 font-body text-xs bg-indigo-300/50 py-1 px-2 w-fit rounded-xl">
                  Most popular
                </span>
              )}
              <div className="mb-5">
                <p className="mb-2 font-body text-lg font-semibold">
                  {t.name}
                </p>
                <h2 className="mb-1 font-heading font-bold text-4xl">
                  {t.price}
                </h2>
                <p className="mb-1 font-body text-sm font-semibold">
                  {t.period}
                </p>
              </div>
              <p className="mb-7 font-body font-semibold">
                {t.desc}
              </p>
              <button
                className={`mb-10 py-1.5 text-sm font-semibold font-body leading-relaxed tracking-wide rounded-lg transition-colors ease-linear duration-200 ${
                  t.featured
                    ? "bg-indigo-400 hover:bg-indigo-500 scale-105"
                    : "bg-gray-700 text-white hover:bg-gray-600 scale-100"
                }`}
              >
                {t.cta}
              </button>
              <ul className="flex flex-col gap-3">
                {t.features.map((f, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-3 h-3 border rounded-full flex justify-center items-center">
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm font-body">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
