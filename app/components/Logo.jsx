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
      </motion.div>
    </Link>
  );
};

export default Logo;
