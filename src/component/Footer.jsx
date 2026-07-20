import { NavLink } from "react-router-dom";
import Images from "../assets/image";

const Footer = () => {
  const Links = [
    {
      name: "Features",
      ref: "#features",
    },
    {
      name: "Pricing",
      ref: "#pricing",
    },
  ];
  const LINKS = [
    {
      name: "Privacy",
      to: "/privacy"
    },
    {
      name: "Terms",
      to: "/terms"
    },
    {
      name: "Contact",
      to: "/contact"
    }
  ]

  return (
    <section className="dark:text-white dark:bg-gray-900 py-10">
      <div className="px-5 md:px-10 text-center flex flex-col items-center">
        <NavLink
          to="/"
          className="flex items-baseline gap-1 cursor-pointer mb-5"
        >
          <img src={Images.Planning} alt="Logo image" className="w-5 h-5" />
          <h1 className="text-2xl font-heading font-semibold">
            <strong>
              Mind<span className="text-indigo-500">Space</span>
            </strong>
          </h1>
        </NavLink>
        <div className="flex justify-center gap-5 flex-wrap items-cente font-body text-xl font-semibold tracking-wide leading-relaxed text-gray-400 mb-5">
          {Links.map((l, i) => (
            <p key={i} >
              <a href={l.ref}>{l.name}</a>
            </p>
          ))}
          {
            LINKS.map((li, index) => (
              <NavLink to={li.to} key={index} >
                <p>
                  {li.name}
                </p>
              </NavLink>
            ))
          }
        </div>
        <p className="font-body font-medium text-lg leading-relaxed tracking-widest text-gray-400">
          &copy; 2026 Mindspace. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
