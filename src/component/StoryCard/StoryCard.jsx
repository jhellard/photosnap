const StoryCard = ({ image, date, alt, heading, author }) => {
  return (
    <li className="relative">
      <img className="min-w-full brightness-[65%]" src={image} alt={alt} />
      <div className="absolute inset-0 mb-10 flex flex-col justify-end px-8 text-pureWhite">
        {date && <span className="mb-1 text-[13px]">{date}</span>}
        <h3 className="mb-1 text-[18px] font-bold leading-[25px]">{heading}</h3>
        <span className="mb-4 text-[13px]">{`by ${author}`}</span>
        <hr className="mb-5 opacity-25" />
        <button className="flex items-center justify-between text-[12px] font-bold tracking-[2px]">
          READ STORY
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fill-rule="evenodd" stroke="currentColor">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default StoryCard;
