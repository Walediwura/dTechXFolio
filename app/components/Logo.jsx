"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image"; // renamed to avoid conflict
import { motion } from "framer-motion";
import logo from "@/public/praise-logo.svg";
import logoWhite from "@/public/logo-light.svg";
import Link from "next/link";
import Head from "next/head";

const Logo = ({ themeColor }) => {
  const [isMounted, setIsMounted] = useState(false);
  const isDarkMode = themeColor === "dark";

  useEffect(() => {
    setIsMounted(true);

    const logoDark = new window.Image();
    logoDark.src = "/logo-light.svg";

    const logoLight = new window.Image();
    logoLight.src = "/praise-logo.svg";
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/praise-logo.svg" />
        <link rel="preload" as="image" href="/logo-light.svg" />
      </Head>

      <Link href="#projects">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="cursor-pointer transition-all duration-300 ease-out"
        >
          <NextImage src={isDarkMode ? logoWhite : logo} alt="logo" />
        </motion.div>
      </Link>
    </>
  );
};

export default Logo;
