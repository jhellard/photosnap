const FeaturedStoryCard = ({
  image,
  alt,
  heading,
  date,
  author,
  description,
}) => {
  return (
    <section>
      <img className="min-w-full" src={image} alt={alt} />
      <section className="flex flex-col bg-pureBlack px-[28px] pt-12 text-pureWhite">
        <span className="mb-4 text-[12px] font-bold tracking-[2px]">
          LAST MONTH'S FEATURED STORY
        </span>
        <h1 className="mb-4 text-[2rem] font-bold leading-[40px] tracking-[3.33px]">
          {heading}
        </h1>
        <div className="mb-6 text-[13px]">
          <span className="mr-[9px] opacity-75">{date}</span>
          <span>by {author}</span>
        </div>
        <p className="mb-6 text-[15px] leading-[25px] opacity-60">
          {description}
        </p>
        <button className="mb-12 flex items-center gap-[18px] text-[12px] font-bold tracking-[2px]">
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
