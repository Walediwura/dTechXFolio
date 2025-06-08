"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/praise-logo.svg";
import logoWhite from "@/public/logo-light.svg";
import { PROFILE } from "../constants";
import Link from "next/link";

const Logo = ({ themeColor }) => {
  const [isMounted, setIsMounted] = useState(false);
  const isDarkMode = themeColor === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent SSR hydration mismatch

  const nickname = PROFILE?.nickName || "";

  return (
    <Link href="#projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="cursor-pointer transition-all duration-300 ease-in-out"
      >
        <Image src={isDarkMode ? logoWhite : logo} alt="logo" />

        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          className={`text-sm ${isDarkMode ? "text-whitey" : "text-darko"} font-thin tracking-[0.156px] transition-all duration-300 ease-in-out`}
        >
          {nickname.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo;
