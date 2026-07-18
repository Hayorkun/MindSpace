import Images from "../assets/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useTheme from "../context/useTheme";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const NavBarLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <nav className="z-50 px-5 md:px-10 border-b dark:border-gray-800 bg-white sticky -top-1 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto hidden md:flex justify-between items-center h-16">
          <div className="flex items-baseline">
            <NavLink to="/" className="flex items-center cursor-pointer">
              <img src={Images.Planning} alt="Logo icon" className="w-5 h-5" />
              <h1 className="text-2xl font-semibold">
                <strong>
                  Mind<span className="text-indigo-600">Space</span>
                </strong>
              </h1>
            </NavLink>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              {NavBarLinks.map((links) => (
                <li key={links.name}>
                  <a
                    href={links.href}
                    className="text-sm flex py-2 transition-colors cursor-pointer"
                  >
                    {links.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <button onClick={toggleTheme} className="cursor-pointer"> 
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <NavLink
              to="signin"
              className=" px-2 py-1.5 text-sm rounded-md hover:bg-gray-300/40 dark:hover:bg-gray-700/40 transition-colors ease-in-out duration-300 cursor-pointer"
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
                  Mind<span className="text-indigo-600">Space</span>
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
      </nav>
      {sideBar && (
        <>
          <div
            onClick={() => setSideBar(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 cursor-pointer"
          />
          <div
            className={`h-fit w-full z-50 py-5 top-16.5 right-0 left-0 fixed bg-white shadow-xl transform transition-transform duration-500 ease-in-out dark:bg-gray-900 dark:text-white 
              ${sideBar ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div className="">
              <ul className="flex flex-col gap-5 mb-5">
                {NavBarLinks.map((links) => (
                  <li key={links.name} className="dark:hover:bg-gray-700/40 hover:bg-gray-200/30 px-3">
                    <a
                      href={links.href}
                      onClick={() => setSideBar(false)}
                      className="text-sm cursor-pointer font-semibold flex py-2 transition-colors text-black dark:text-white "
                    >
                      {links.name}
                    </a>
                  </li>
                ))}
              </ul>
              <NavLink
                to="/signup"
                onClick={() => setSideBar(false)}
                className="py-1 mx-3 flex justify-center rounded-md bg-indigo-500 text-white cursor-pointer text-lg hover:bg-indigo-600"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
