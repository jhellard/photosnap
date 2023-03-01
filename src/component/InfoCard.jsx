import Line from "./Line";

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
  imageRight,
}) => {
  const cardVariants = {
    bgBlack: "bg-pureBlack",
    bgWhite: "bg-pureWhite",
    textBlack: "text-pureBlack",
    textWhite: "text-pureWhite",
  };

  const headingStyles = `mb-4 text-[2rem] sm:text-[40px] sm:mb-5 sm:leading-[48px] sm:tracking-[4.17px] font-bold leading-[40px] tracking-[3.33px] ${
    padding && "pr-[3rem]"
  }`;

  return (
    <section
      className={`flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-1 ${cardVariants[bgColor]} ${cardVariants[textColor]}`}
    >
      <picture>
        <source
          media="(min-width:900px)"
          srcSet={`../assets/home/desktop/${image}`}
        />
        <source
          media="(min-width:640px)"
          srcSet={`../assets/home/tablet/${image}`}
        />
        <img
          src={`../assets/home/mobile/${image}`}
          className="w-full"
          alt={alt}
        />
      </picture>

      <section
        className={`relative flex flex-col justify-center py-[72px] pl-[33px] pr-6 text-left sm:col-span-2 sm:px-16 ${
          imageRight && "sm:row-start-1"
        }`}
      >
        {line && <Line />}
        {headingType === "h1" ? (
          <h1 className={headingStyles}>{heading}</h1>
        ) : (
          <h2 className={headingStyles}>{heading}</h2>
        )}
        <p
          className={`${
            button && "mb-[23px]"
          } text-[15px] leading-[25px] opacity-60 sm:mb-12`}
        >
          {description}
        </p>
        {button && (
          <button className="flex items-center gap-[18px] self-start text-[12px] font-bold tracking-[2px]">
            {button}
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="currentColor">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </button>
        )}
      </section>
    </section>
  );
};

export default InfoCard;
