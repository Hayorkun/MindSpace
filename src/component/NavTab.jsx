import { NavLink } from "react-router-dom";
import BackButton from "./BackButton";
import Images from "../assets/image";
import { Moon, Sun } from "lucide-react";
import useTheme from "../context/useTheme";

const NavTab = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="top-0 sticky dark:bg-gray-900 bg-white dark:text-white">
      <div className="h-15 flex justify-between items-center px-5 md:px-10">
        <BackButton />
        <NavLink to="/" className="flex items-baseline">
          <img src={Images.Planning} alt="Logo image" className="w-5 h-5" />
          <h1 className="font-heading text-2xl">
            <strong>
              Mind<span className="text-indigo-500">Space</span>
            </strong>
          </h1>
        </NavLink>
        <button onClick={toggleTheme} className="px-2.5 py-1.5 rounded-md dark:bg-gray-800 bg-gray-100/50  hover:text-indigo-400 transition-colors ease-linear duration-150 cursor-pointer">
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </section>
  );
};

export default NavTab;
