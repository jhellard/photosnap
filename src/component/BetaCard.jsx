import Line from "./Line";

const BetaCard = () => {
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
          className="absolute min-w-full sm:min-h-full"
          alt="Inside of a ravine"
        />
      </picture>
      <section className="relative flex flex-col items-center justify-center py-[64px] pl-[33px] pr-6 text-left sm:flex-row sm:justify-between sm:px-10">
        <Line full />
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
};

export default BetaCard;
