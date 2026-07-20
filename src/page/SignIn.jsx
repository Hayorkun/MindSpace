import FootTab from "../component/FootTab";
import NavTab from "../component/NavTab";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const SocialLink = [
    {
      icon: FcGoogle,
      name: "Google",
    },
    {
      icon: FaGithub,
      name: "GitHub",
    },
  ];

  return (
    <>
      <NavTab />
      <section className="py-20 dark:bg-gray-900 bg-gray-100 dark:text-white">
        <div className="px-5 md:px-10">
          <div className="flex flex-col max-w-lg mx-auto min-h-120">
            <div className="mb-7">
              <h1 className="font-heading font-extrabold text-2xl md:text-3xl leading-tight tracking-wide">
                Sign in to Mindspace
              </h1>
              <p className="font-body font-normal text-base leading-relaxed md:tracking-wider">
                Enter your credentials to access your workspace.
              </p>
            </div>
            <form className="mb-5 flex flex-col gap-5">
              <label
                htmlFor="email"
                className="flex flex-col gap-5 font-body text-xl font-medium"
              >
                {" "}
                Email address
                <input
                  type="text"
                  className="border h-10 px-2 rounded-md text-base font-normal"
                  placeholder="you@example.com"
                />
              </label>
              <label
                htmlFor="password"
                className="flex flex-col gap-5 font-body text-xl font-medium"
              >
                Password
                <input
                  type="password"
                  className="border h-10 px-2 rounded-md text-base font-normal"
                  placeholder="********"
                />
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="button"
                  className="w-4 h-4 border border-gray-600 dark:border-gray-300 rounded-sm"
                />
                <p className="font-body text-lg font-normal text-gray-700 dark:text-gray-300">
                  Remember me for 30 days
                </p>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 py-2 rounded-lg text-lg text-white"
              >
                Sign in
              </button>
            </form>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px dark:bg-gray-600 bg-gray-400" />
              <span className="text-gray-400 font-body">OR</span>
              <div className="flex-1 h-px dark:bg-gray-600 bg-gray-400" />
            </div>
            <div className="flex items-center gap-3 mb-5">
              {SocialLink.map((s, i) => {
                const Icon = s.icon;

                return (
                  <button
                    key={i}
                    className="flex-1 flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 gap-2 rounded-lg py-2.5 font-body text-base"
                  >
                    <Icon /> {s.name}
                  </button>
                );
              })}
            </div>
            <p className="text-center font-body font-normal text-base leading-relaxed dark:text-gray-400 text-gray-500">
              Dont't have an account?{" "}
              <NavLink to="/signup" className="text-indigo-600">
                Create on free
              </NavLink>
            </p>
          </div>
        </div>
      </section>
      <FootTab />
    </>
  );
};

export default SignIn;
