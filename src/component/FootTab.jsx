import { Dot } from "lucide-react";

const FootTab = () => {
  return (
    <section className="w-full py-2 dark:bg-gray-900 dark:text-white">
      <div className="flex items-center w-fit mx-auto text-center">
        <p className="flex font-body font-normal text-base items-center leading-relaxed tracking-widest dark:text-gray-400 text-gray-600">
          &copy; 2026 Mindspace <Dot /> Privacy <Dot /> Terms
        </p>
      </div>
    </section>
  );
};

export default FootTab;
