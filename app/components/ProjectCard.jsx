import React from "react";

const ProjectCard = ({
  companyName = "TrueKeepers NGO",
  companyBio = "Loading...",
  positionHeld = "Web Application",
  link,
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="px-6 py-7 flex flex-col gap-8 bg-whitish-gray sm:hover:scale-105  dark:bg-[#252525] w-full hover:transform duration-300 hover:duration-500 transform transition"
    >
      <h2 className="text-xl uppercase text-darko dark:text-whitey">
        {companyName}
      </h2>

      <span className="text-nice-gray dark:text-alt-gray leading-[23.94px] tracking-[0.18px] font-urban">
        {companyBio}
      </span>

      <span className="text-xs tracking-[0.12px] dark:text-whitey">
        {positionHeld}
      </span>
    </a>
  );
};

export default ProjectCard;
