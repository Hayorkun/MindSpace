import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="px-5 md:px-10 text-center flex flex-col items-center"
      >
        <NavLink
          to="/"
          className="flex items-baseline gap-1 cursor-pointer mb-3"
        >
          <img src={Images.Planning} alt="Logo image" className="w-5 h-5" />
          <h1 className="text-2xl font-heading font-semibold">
            <strong>
              Mind<span className="text-indigo-500">Space</span>
            </strong>
          </h1>
        </NavLink>
        <div className="flex justify-center gap-5 flex-wrap items-center font-body text-xl font-semibold tracking-wide leading-relaxed text-gray-400 mb-5">
          {Links.map((l, i) => (
            <motion.p key={i} whileHover={{ y: -2 }}>
              <a href={l.ref}>{l.name}</a>
            </motion.p>
          ))}
          {
            LINKS.map((li, index) => (
              <motion.div key={index} whileHover={{ y: -2 }}>
                <NavLink to={li.to}>
                  <p>
                    {li.name}
                  </p>
                </NavLink>
              </motion.div>
            ))
          }
        </div>
        <p className="font-body font-medium text-base leading-relaxed tracking-widest text-gray-400 flex-nowrap">
          &copy; 2026 Mindspace. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Footer;
