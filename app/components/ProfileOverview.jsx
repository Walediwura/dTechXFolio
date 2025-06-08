"use client";
import { DESIGNS, EXPERIENCES, PROFILE, PROJECTS } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import Avatar from "@/public/praise-avatar.svg";
import LinkedIn from "@/public/linkedin (2).svg";
import Figma from "@/public/figma.svg";
import Dribble from "@/public/dribbble.svg";
import Behance from "@/public/behance.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import DesignCard from "./DesignCard";
import ExperienceCard from "./ExperienceCard";
import { useTheme } from "next-themes";

const sections = [
  { id: 1, label: "Projects", href: "#projects" },
  { id: 2, label: "Designs", href: "#design" },
  { id: 3, label: "Experience", href: "#experience" },
];

const ProfileOverview = () => {
  const [visible, setVisible] = useState(false);
  const [section, setSection] = useState(1);

  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleUpdateSection = (id) => {
    if (id !== section) setSection(id);
  };

  return (
    <div
      className="flex w-full h-full flex-col lg:flex-row lg:justify-between"
      id="projects"
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col lg:sticky lg:top-0 h-screen text-darko pt-[126px] pb-10 justify-between gap-4 lg:w-[50%]"
      >
        <div className="w-full flex flex-col gap-14">
            <div className="flex flex-col text-darko dark:text-whitey duration-300 transition ease-out gap-2">
          <h1 className="text-6xl font-bold uppercase">
            {" "}
            {PROFILE?.name?.split("")?.map((character, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.15 }}
              >
                {character}
              </motion.span>
            ))}
          </h1>

          <span className="text-xl tracking-[0.312px]">
            {PROFILE?.roles?.join(" | ")}
          </span>
        </div>

        {/* Bio */}
        <div className="text-nice-gray dark:text-alt-gray font-urban tracking-[0.18px] md:text-lg w-[96%]">
          A talented frontend and product designer with years of experience in
          the design industry.{" "}
          <span className="text-darko dark:text-whitey  font-bold">
            Creative problem solver
          </span>{" "}
          with a passion for innovation and a deep understanding of design
          principles. Focused on creating solutions and experiences that{" "}
          <span className="text-darko dark:text-whitey font-bold">
            leaves a lasting impact
          </span>
          .
        </div>       

        </div >
        
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 text-sm"
        >
          {sections.map(({ id, label, href }) => {
            const isActive = section === id;

            const getColor = () => {
              if (theme === "dark") {
                return isActive ? "#F6F7F7" : "#BCBCBC";
              } else {
                return isActive ? "#111111" : "#A3A3A3";
              }
            };

            return (
              <Link
                key={id}
                href={href}
                onClick={() => setSection(id)}
                className="relative flex items-center gap-4 w-fit cursor-pointer group"
              >
                {/* Number */}
                <motion.p
                  className="w-6 font-semibold "
                  animate={{ color: getColor() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  0{id}
                </motion.p>

                {/* Underline */}
                <div className="relative h-[2px] w-[52px]">
                  {isActive && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute top-0 left-0 h-full w-full bg-darko dark:bg-whitey rounded-full"
                      transition={{
                        duration: 0.45,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  )}
                  {!isActive && (
                    <motion.div
                      className="absolute h-full bg-nice-gray dark:bg-alt-gray rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 24 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <motion.span
                  className={`font-medium ${isActive ? "text-darko dark:text-whitey" : "text-nice-gray dark:text-alt-gray"} tracking-wide`}
                  whileHover={{
                    x: -4,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  }}
                >
                  {label}
                </motion.span>
              </Link>
            );
          })}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-11 pt-16 md:pt-0 relative"
        >
          <AnimatePresence mode="wait">
            {visible ? (
              <motion.span
                key="visible"
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white bottom-[73px] left-1/2 w-[8.667px] h-[8.667px] rounded-full absolute"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white backdrop-blur-sm bottom-[90px] left-[70%] w-[250px] h-10 rounded-full absolute"
                >
                  <span className="font-urban flex h-full w-full text-sm text-darko font-semibold items-center justify-center">
                    Hello You, let’s create magic!
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white bottom-[89px] left-[67%] w-[17.334px] h-[17.334px] rounded-full absolute"
                />
                <Image
                  className="rounded-full w-15 h-15 border-2 border-white"
                  src={Avatar}
                  alt="avatar"
                />
              </motion.span>
            ) : (
              <motion.div
                key="hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  className="rounded-full border-2 w-15 h-15 border-white transform scale-x-[-1] transition duration-300 ease-out"
                  src={Avatar}
                  alt="avatar"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/praise-akobundu"
              className="cursor-pointer hover:scale-[1.02] duration-300 ease-out"
            >
              <Image src={LinkedIn} alt="linkedIn" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/@dtechguyx"
              className="cursor-pointer hover:scale-[1.02] duration-300 ease-out"
            >
              <Image src={Figma} alt="figma" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/dtechguyx"
              className="cursor-pointer hover:scale-[1.02] duration-300 ease-out"
            >
              <Image src={Dribble} alt="dribbble" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/praiseakobundu"
              className="cursor-pointer hover:scale-[1.02] duration-300 ease-out"
            >
              <Image src={Behance} alt="behance" />
            </a>{" "}
          </motion.div>
        </motion.footer>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pt-20 md:pt-[126px] pb-10 h-full gap-4 lg:w-[49%] overflow-y-auto"
      >
        <div
          onMouseEnter={() => handleUpdateSection(1)}
          className="flex w-full flex-col text-darko mb-30"
        >
          <header className="flex mb-7 flex-col text-darko dark:text-whitey">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="uppercase font-bold"
            >
              Projects
            </motion.span>
          </header>

          <main>
            <section className="flex flex-col gap-6">
              {PROJECTS?.map((project, index) => (
                <ProjectCard
                  key={index}
                  companyName={project?.company}
                  companyBio={project?.description}
                  positionHeld={project?.role}
                  link={project?.url}
                />
              ))}
            </section>

            <div id="design" className="mb-2.5"></div>
          </main>
        </div>
        <div
          onMouseEnter={() => handleUpdateSection(2)}
          className="flex flex-col w-full text-darko dark:text-whitey mb-30"
        >
          <header className="flex mb-7 flex-col text-darko dark:text-whitey">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="uppercase font-bold"
            >
              Designs
            </motion.span>
          </header>

          <main>
            <section className="w-full flex flex-wrap justify-between">
              {DESIGNS?.map((design, index) => (
                <DesignCard
                  key={index}
                  projectName={design?.name}
                  about={design?.about}
                  platformImg={design?.image}
                  link={design?.url}
                />
              ))}
            </section>

            <div id="experience" className="mb-2.5"></div>
          </main>
        </div>
        <div
          onMouseEnter={() => handleUpdateSection(3)}
          className="flex flex-col w-full text-darko dark:text-whitey"
        >
          <header className="flex mb-7 flex-col text-darko dark:text-whitey">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="uppercase font-bold"
            >
              Experiences
            </motion.span>
          </header>

          <main>
            <section className="w-full flex flex-col gap-12 justify-between">
              {EXPERIENCES?.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  companyName={experience?.companyName}
                  roles={experience?.role}
                  jobType={experience?.jobType}
                  duration={experience?.duration}
                />
              ))}
            </section>
          </main>
        </div>
      </motion.section>
    </div>
  );
};

export default ProfileOverview;
