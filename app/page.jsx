"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import ProfileOverview from "./components/ProfileOverview";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      className={`px-8 xl:px-16 w-full min-h-screen flex flex-col items-center dark:bg-background-dark bg-background transition-all duration-300`}
    >
      <Nav />
      <ProfileOverview />
    </div>
  );
}
