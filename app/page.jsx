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
        const step = diff * 0.1;
        if (Math.abs(diff) < 0.1) return target;
        return prev + step;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [target]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTarget((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 6200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`relative w-full bg-white ${
        loading ? "h-screen overflow-hidden" : ""
      }`}
    >
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 w-full flex items-center p-[2.5%] dark:bg-background-dark bg-background text-darko dark:text-whitey"
          >
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="text-[100px] font-semibold tracking-tight"
              >
                dTechGuyX
              </motion.div>

              <span className="text-2xl font-light">
                <AnimatedTextSwitcher />
              </span>
            </div>

            <div className="absolute bottom-4 right-6 font-bold lg:text-[100px] lg:px-[5%] py-[2.5%]">
              {Math.round(displayCount)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.1,
          }}
          className="px-8 xl:px-16 w-full flex flex-col items-center dark:bg-background-dark bg-background transition-all duration-300"
        >
          <Nav />
          <ProfileOverview />
        </motion.div>
      )}
    </div>
  );
}
