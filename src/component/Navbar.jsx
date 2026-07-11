import Images from "../assets/image";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const NavBarLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <nav className="z-50 px-6 md:px-12 border-b bg-white sticky top-0">
        <div className="mx-auto hidden md:flex justify-between items-center h-16">
          <div className="flex items-baseline">
            <img src={Images.Planning} alt="Logo icon" className="w-5 h-5" />
            <h1 className="text-2xl font-semibold">
              <strong>
                Mind<span className="text-indigo-600">Space</span>
              </strong>
            </h1>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              {NavBarLinks.map((links) => (
                <li key={links.name}>
                  <a
                    href={links.href}
                    className="text-sm flex py-2 transition-colors"
                  >
                    {links.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center gap-1">
            <NavLink
              to="signin"
              className=" px-2 py-1.5 text-sm rounded-md hover:bg-gray-300/40 transition-colors ease-in-out duration-300"
            >
              Sign in
            </NavLink>
            <NavLink
              to="signup"
              className="text-sm border px-2 py-1.5 rounded-md bg-indigo-600 text-white hover:opacity-90 transition-colors ease-in-out duration-300"
            >
              Get Started Free
            </NavLink>
          </div>
        </div>
        {/* MOBILE NAVBAR */}
        <div className="md:hidden flex justify-between items-center h-16">
          <div className="flex items-center gap-1">
            <img src={Images.Planning} alt="Logo icon" className="w-5 h-5" />
            <h1 className="text-2xl font-semibold">
              <strong>
                Mind<span className="text-indigo-600">Space</span>
              </strong>
            </h1>
          </div>
          <button onClick={() => setSideBar(!sideBar)}>
            {sideBar ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {sideBar && (
        <>
          <div
            onClick={() => setSideBar(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <div
            className={`h-fit w-full z-50 p-3 top-16.5 right-0 left-0 fixed bg-white shadow-xl transform transition-transform duration-500 ease-in-out 
              ${sideBar ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div>
              <ul className="flex flex-col gap-5 mb-5">
                {NavBarLinks.map((links) => (
                  <li key={links.name} className="hover:bg-gray-200/30">
                    <a
                      href={links.href}
                      onClick={() => setSideBar(false)}
                      className="text-sm font-semibold flex py-2 transition-colors text-black"
                    >
                      {links.name}
                    </a>
                  </li>
                ))}
              </ul>
              <NavLink
                to="/signup"
                onClick={() => setSideBar(false)}
                className="py-1 flex justify-center rounded-md bg-indigo-500 text-white text-lg hover:bg-indigo-600"
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
