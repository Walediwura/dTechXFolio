"use client";
import Image from "next/image";
import Logo from "./Logo";
import Sunny from "@/public/sunny-light.svg";
import Nighty from "@/public/moon.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full px-8 xl:px-16 fixed z-50 transition-all duration-300 ease-in-out dark:bg-transparent bg-white/10 backdrop-blur-md border-b border-white/10 dark:border-0 flex justify-between items-center pt-10"
    >
      <div>
        {" "}
        <Logo themeColor={theme} />
      </div>

      <a
        href="mailto:akobundupraise66@gmail.com?subject=Let's%20Create%20Magic&body=Good%20day%20d-TechGuyX,%0A%0AI%20would%20like%20us%20to%20create%20magic.%0A%0AThanks"
        className="relative text-darko dark:text-whitey cursor-pointer group text-2xl inline-block sm:hidden"
      >
        Reach Out
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 dark:bg-whitey bg-darko transition-all duration-300 group-hover:w-full"></span>
      </a>

      <div className="text-darko dark:text-whitey uppercase flex items-center gap-10 relative">
        <a
          href="mailto:akobundupraise66@gmail.com?subject=Let's%20Create%20Magic&body=Good%20day%20d-TechGuyX,%0A%0AI%20would%20like%20us%20to%20create%20magic.%0A%0AThanks"
          className="relative cursor-pointer group text-2xl hidden sm:inline-block"
        >
          Reach Out
          <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 dark:bg-whitey bg-darko transition-all duration-300 group-hover:w-full"></span>
        </a>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="cursor-pointer rounded-full relative w-10 h-10"
        >
          <Image
            className="absolute inset-0 m-auto rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-transform duration-300"
            src={Sunny}
            alt="sun"
          />
          <Image
            className="absolute inset-0 m-auto rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-transform duration-300"
            src={Nighty}
            alt="moon"
          />
        </button>
      </div>
    </motion.nav>
  );
};

export default Nav;
