import Image from "next/image";
import BriefCase from "@/public/briefcase.svg";

const ExperienceCard = ({ companyName, roles, duration, jobType }) => {
  return (
    <div className="flex items-center gap-6">
      <div className="w-25 h-25 flex justify-center items-center bg-whitish-gray dark:bg-[#252525] transition duration-300 rounded-full">
        <Image
          src={BriefCase}
          alt="Briefcase"
          className="dark:invert transition duration-300"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-nice-gray dark:text-alt-gray  text-sm font-urban tracking-[0.14px]">
            {jobType}
          </p>
          <h2 className="text-darko dark:text-whitey text-xl tracking-[0.312px]">
            {companyName}
          </h2>
          <p className="font-urban tracking-[0.18px] text-nice-gray dark:text-alt-gray ">
            {roles?.join(" | ")}
          </p>
        </div>

        <span className="text-darko dark:text-whitey">{duration}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
