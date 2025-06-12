const ApproachCard = ({ id, method, explication }) => {
  return (
    <div className="py-6 px-3 flex flex-col gap-3">
      <header className="text-darko dark:text-whitey text-xl">
        {id}. {method}
      </header>

      <div className="text-[15px] font-normal font-urban leading-[23.94px] text-nice-gray dark:text-alt-gray tracking-[0.18px]">
        {explication}
      </div>
    </div>
  );
};

export default ApproachCard;
