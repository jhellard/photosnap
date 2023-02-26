import Line from "../Line";

const InfoCard = ({
  image,
  alt,
  headingType,
  heading,
  description,
  button,
  bgColor,
  textColor,
  line,
  padding,
}) => {
  const cardVariants = {
    bgBlack: "bg-pureBlack",
    bgWhite: "bg-pureWhite",
    textBlack: "text-pureBlack",
    textWhite: "text-pureWhite",
  };

  const headingStyles = `mb-4 text-[2rem] font-bold leading-[40px] tracking-[3.33px] ${
    padding && "pr-[3rem]"
  }`;

  return (
    <section
      className={`flex flex-col ${cardVariants[bgColor]} ${cardVariants[textColor]}`}
    >
      {/* TODO: PASS ALT TEXT */}
      <img src={image} alt={alt} />
      <section className="relative flex min-h-[419px] flex-col items-center justify-center pl-[33px] pr-6 text-left">
        {line && <Line />}
        {headingType === "h1" ? (
          <h1 className={headingStyles}>{heading}</h1>
        ) : (
          <h2 className={headingStyles}>{heading}</h2>
        )}

        <p className="mb-[23px] text-[15px] leading-[25px] opacity-60">
          {description}
        </p>
        <button className="flex items-center gap-[18px] self-start text-[12px] font-bold tracking-[2px]">
          {button}
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="currentColor">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </button>
      </section>
    </section>
  );
};

export default InfoCard;
