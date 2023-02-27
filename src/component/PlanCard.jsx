import FullLine from "./FullLine";

const PlanCard = ({ heading, description, price, type }) => {
  const cardVariants = {
    normal: "bg-[#F5F5F5] text-pureBlack",
    pro: "bg-pureBlack text-pureWhite",
    button: "bg-pureWhite text-pureBlack",
  };

  const buttonVariants = {
    normal: "bg-pureBlack text-pureWhite",
    pro: "bg-pureWhite text-pureBlack",
  };

  return (
    <div
      className={`relative mx-7 flex flex-col items-center justify-center px-[22px] pt-14 text-center ${cardVariants[type]}`}
    >
      {type === "pro" && <FullLine />}
      <h2 className="mb-[18px] text-[24px] font-bold leading-[25px]">
        {heading}
      </h2>
      <p className="mb-10 text-[15px] leading-[25px] opacity-60">
        {description}
      </p>
      <h3 className="mb-10 text-[40px] font-bold leading-[48px] tracking-[4.17px]">
        {price}
        <span className="block text-[15px] leading-[25px] tracking-normal opacity-60">
          per month
        </span>
      </h3>
      <button
        className={`text-bold mb-10 min-w-[95%] py-3 px-4 text-[12px] tracking-[2px] ${buttonVariants[type]}`}
      >
        PICK PLAN
      </button>
    </div>
  );
};

export default PlanCard;
