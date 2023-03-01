const FeaturedStoryCard = ({
  image,
  alt,
  heading,
  date,
  author,
  description,
}) => {
  return (
    <section className="relative">
      <picture>
        <source
          media="(min-width:900px)"
          srcSet={`../assets/stories/desktop/${image}`}
        />
        <img
          className="min-w-full"
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
};

export default FeaturedStoryCard;
