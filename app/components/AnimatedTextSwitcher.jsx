"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const texts = [
  "your go to Designer",
  "UI/UX Expert",
  "Creative Coder",
  "Problem Solver",
];

export default function AnimatedTextSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [index, onStep]);

  return (
    <div className="relative h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          - {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
