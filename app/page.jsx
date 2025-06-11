"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import ProfileOverview from "./components/ProfileOverview";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTextSwitcher from "./components/AnimatedTextSwitcher";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [target, setTarget] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const animate = () => {
      setDisplayCount((prev) => {
        const diff = target - prev;
        const step = diff * 0.06;
        if (Math.abs(diff) < 0.1) return target;
        return prev + step;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [target]);

  useEffect(() => {
    if (!loading) return;

    let i = 0;
    const interval = setInterval(() => {
      setTarget(i);
      i++;
      if (i > 100) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5280);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`relative w-full bg-white ${
        loading ? "min-h-[100dvh] overflow-hidden" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 z-[9999] w-full flex items-center p-[2.5%] dark:bg-background-dark bg-background text-darko dark:text-whitey"
          >
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="text-7xl md:text-[100px] font-semibold tracking-tight"
              >
                dTechGuyX
              </motion.div>

              <span className="text-2xl font-light">
                <AnimatedTextSwitcher />
              </span>
            </div>

            <div className="absolute bottom-4 left-0  font-bold p-[2.5%]">
              Coded by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/Walediwura"
                className="relative inline-block cursor-pointer group"
              >
                Walediwura&trade;
                <span className="absolute left-0 bottom-0 h-[2px] w-0 dark:bg-whitey bg-darko transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="absolute bottom-4 right-6 font-bold lg:text-[100px] lg:px-[5%] py-[2.5%]">
              {Math.round(displayCount)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 1, 0.5, 1],
          delay: loading ? 0.3 : 0,
        }}
        className={`px-8 xl:px-16 w-full flex flex-col items-center dark:bg-background-dark bg-background transition-all duration-300 ${
          loading ? "pointer-events-none" : ""
        }`}
      >
        {!loading && (
          <>
            <Nav />
            <ProfileOverview />
          </>
        )}
      </motion.div>
    </div>
  );
}
