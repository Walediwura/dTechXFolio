import Image from "next/image";

const DesignCard = ({
  projectName = "Title",
  about = "Something about it...",
  platformImg,
  link,
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="bg-whitish-gray dark:bg-[#252525] cursor-pointer flex flex-col gap-8 w-full mb-4 sm:w-[49%] px-6 py-7 sm:hover:scale-[1.03] duration-500 transform hover:transform transition"
    >
      <header className="text-darko dark:text-whitey text-xl">
        {projectName}
      </header>

      <div className="text-nice-gray dark:text-alt-gray font-urban">
        {about}
      </div>

      {platformImg ? (
        <span>
          <Image className="w-6 h-6" src={platformImg} alt="Logo" />
        </span>
      ) : (
        ""
      )}
    </a>
  );
};

export default DesignCard;
