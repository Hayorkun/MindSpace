import Images from "../assets/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useTheme from "../context/useTheme";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const NavBarLinks = [
    { name: "Features", target: "features" },
    { name: "How it works", target: "how-it-works" },
    { name: "Pricing", target: "pricing" },
   
  ];

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));

    if (!sections.length) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleSectionClick = (event, target) => {
    event.preventDefault();
    setActiveSection(target);
    setSideBar(false);

    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
        className="z-50 px-5 md:px-10 border-b dark:border-gray-800 bg-white sticky -top-1 dark:bg-gray-900 dark:text-white"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="mx-auto hidden md:flex justify-between items-center h-16">
          <div className="flex items-baseline">
            <NavLink to="/" className="flex items-center cursor-pointer">
              <img src={Images.Planning} alt="Logo icon" className="w-5 h-5" />
              <h1 className="text-2xl font-semibold">
                <strong>
                  Mind<span className="text-indigo-500">Space</span>
                </strong>
              </h1>
            </NavLink>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              {NavBarLinks.map((links) => {
                const isActive = activeSection === links.target;

                return (
                  <li key={links.name}>
                    <a
                      href={`#${links.target}`}
                      onClick={(event) => handleSectionClick(event, links.target)}
                      className={`text-sm flex py-2 transition-colors cursor-pointer ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-semibold underline decoration-2 underline-offset-4"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {links.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <button onClick={toggleTheme} className="cursor-pointer">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <NavLink
              to="signin"
              className="px-2 py-1.5 text-sm rounded-md hover:bg-gray-300/40 dark:hover:bg-gray-700/40 transition-colors ease-in-out duration-300 cursor-pointer"
            >
              Sign in
            </NavLink>
            <NavLink
              to="signup"
              className="text-sm px-2 py-1.5 rounded-md bg-indigo-600 text-white hover:opacity-90 transition-colors ease-in-out duration-300 cursor-pointer"
            >
              Get Started Free
            </NavLink>
          </div>
        </div>
        {/* MOBILE NAVBAR */}
        <div className="md:hidden flex justify-between items-center h-16">
          <div className="flex items-center gap-1">
            <NavLink to="/" className="flex items-center">
              <img src={Images.Planning} alt="Logo icon" className="w-5 h-5" />
              <h1 className="text-2xl font-semibold">
                <strong>
                  Mind<span className="text-indigo-500">Space</span>
                </strong>
              </h1>
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="cursor-pointer">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <button onClick={() => setSideBar(!sideBar)} className="cursor-pointer">
              {sideBar ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {sideBar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSideBar(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 cursor-pointer"
            />
            <motion.div
              initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className={`h-fit w-full z-50 py-5 top-16.5 right-0 left-0 fixed bg-white shadow-xl dark:bg-gray-900 dark:text-white`}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="">
                <ul className="flex flex-col gap-5 mb-5">
                  {NavBarLinks.map((links) => {
                    const isActive = activeSection === links.target;

                    return (
                      <li key={links.name} className="dark:hover:bg-gray-700/40 hover:bg-gray-200/30 px-3">
                        <a
                          href={`#${links.target}`}
                          onClick={(event) => handleSectionClick(event, links.target)}
                          className={`text-sm cursor-pointer font-semibold flex py-2 transition-colors ${
                            isActive
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-black dark:text-white"
                          }`}
                        >
                          {links.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <NavLink
                  to="/signup"
                  onClick={() => setSideBar(false)}
                  className="py-1 mx-3 flex justify-center rounded-md bg-indigo-500 text-white cursor-pointer text-lg hover:bg-indigo-600"
                >
                  Get Started
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
