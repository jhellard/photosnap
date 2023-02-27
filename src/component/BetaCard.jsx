import Line from "./Line";

import Beta from "../assets/shared/mobile/bg-beta.jpg";

const BetaCard = () => {
  return (
    <section className="relative flex flex-col bg-pureBlack text-pureWhite">
      <img
        className="absolute min-w-full"
        src={Beta}
        alt="Inside of a ravine"
      />
      <section className="relative flex flex-col justify-center py-[64px] pl-[33px] pr-6 text-left">
        <Line />
        <h2 className="mb-6 text-[2rem] font-bold leading-[40px] tracking-[3.33px]">
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </h2>
        <button className="flex items-center gap-[18px] self-start text-[12px] font-bold tracking-[2px]">
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
