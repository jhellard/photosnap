import { Line } from "./Lines";

export function InfoCard({
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
  main,
}) {
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
      className={`flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-1 ${
        cardVariants[bgColor]
      } ${cardVariants[textColor]} relative ${
        main ? "sm:min-h-[650px]" : "sm:min-h-[600px]"
      }`}
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
          className={`max-h-[294px] min-w-full object-cover ${
            main ? "sm:min-h-[650px]" : "sm:min-h-[600px]"
          }`}
          alt={alt}
        />
      </picture>

      <section
        className={`relative flex flex-col justify-center py-[72px] pl-[33px] pr-6 text-left sm:col-span-2 sm:px-16 ${
          imageRight && "sm:row-start-1"
        }`}
      >
        {line && <Line type="normal" />}
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
}

export function PlanCard({ heading, description, price, type }) {
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
      {type === "pro" && <Line type="full" />}
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
}

export function BetaCard() {
  return (
    <section className="relative flex flex-col bg-pureBlack text-pureWhite">
      <picture>
        <source
          media="(min-width:900px)"
          srcSet={`../assets/shared/desktop/bg-beta.jpg`}
        />
        <source
          media="(min-width:640px)"
          srcSet={`../assets/shared/tablet/bg-beta.jpg`}
        />
        <img
          src={`../assets/shared/mobile/bg-beta.jpg`}
          className="absolute max-h-[288px] min-w-full object-cover sm:min-h-full"
          alt="Inside of a ravine"
        />
      </picture>
      <section className="relative flex flex-col items-center justify-center py-[64px] pl-[33px] pr-6 text-left sm:flex-row sm:justify-between sm:px-10">
        <Line type="fullH" />
        <h2 className="mb-6 text-[2rem] font-bold leading-[40px] tracking-[3.33px] sm:max-w-[400px] sm:text-[40px] sm:leading-[48px] sm:tracking-[4.17px]">
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </h2>
        <button className="flex items-center gap-[18px] self-start text-[12px] font-bold tracking-[2px] sm:self-center">
          GET AN INVITE
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="currentColor">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </button>
      </section>
    </section>
  );
}

export function FeatureCard({ image, alt, heading, description }) {
  // TODO: THIS NEEDS WORK FOR TABLET/MOBILE
  return (
    <li className="flex min-h-[236px] flex-col items-center">
      <img className="mb-12 sm:mb-auto" src={image} alt={alt} />
      <h4 className="mb-4 text-[18px] font-bold leading-[25px]">{heading}</h4>
      <p className="text-[15px] leading-[25px]">{description}</p>
    </li>
  );
}

export function FeaturedStoryCard({
  image,
  alt,
  heading,
  date,
  author,
  description,
}) {
  return (
    <section className="relative">
      <picture>
        <source
          media="(min-width:900px)"
          srcSet={`../assets/stories/desktop/${image}`}
        />
        <img
          className="max-h-[317px] min-w-full object-cover sm:max-h-[650px]"
          src={`../assets/stories/mobile/${image}`}
          alt={alt}
        />
      </picture>
      <section className=" flex flex-col bg-pureBlack px-[28px] pt-12 text-pureWhite sm:absolute sm:inset-0 sm:max-w-[450px] sm:justify-center sm:bg-transparent">
        <span className="mb-4 text-[12px] font-bold tracking-[2px] sm:mb-6">
          LAST MONTH'S FEATURED STORY
        </span>
        <h1 className="mb-4 text-[2rem] font-bold leading-[40px] tracking-[3.33px] sm:text-[40px] sm:leading-[48px] sm:tracking-[4.17px]">
          {heading}
        </h1>
        <div className="mb-6 text-[13px]">
          <span className="mr-[9px] opacity-75">{date}</span>
          <span>by {author}</span>
        </div>
        <p className="mb-6 text-[15px] leading-[25px] opacity-60">
          {description}
        </p>
        <button className="mb-12 flex items-center gap-[18px] text-[12px] font-bold tracking-[2px] sm:mb-0">
          READ THE STORY
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="currentColor">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </button>
      </section>
    </section>
  );
}

export function StoryCard({ image, date, alt, heading, author }) {
  return (
    <li className="relative">
      <picture>
        <source
          media="(min-width:640px)"
          srcSet={`../assets/stories/desktop/${image}`}
        />
        <img
          className="min-w-full brightness-[65%]"
          src={`../assets/stories/mobile/${image}`}
          alt={alt}
        />
      </picture>

      <div className="absolute inset-0 mb-10 flex flex-col justify-end px-8 text-pureWhite">
        {date && <span className="mb-1 text-[13px]">{date}</span>}
        <h3 className="mb-1 text-[18px] font-bold leading-[25px]">{heading}</h3>
        <span className="mb-4 text-[13px]">{`by ${author}`}</span>
        <hr className="mb-5 opacity-25" />
        <button className="flex items-center justify-between text-[12px] font-bold tracking-[2px]">
          READ STORY
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="currentColor">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </button>
      </div>
    </li>
  );
}
