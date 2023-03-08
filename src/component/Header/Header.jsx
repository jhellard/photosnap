import { Link } from "react-router-dom";

import Logo from "../../assets/shared/desktop/logo.svg";
import Menu from "./assets/menu.svg";
import Close from "./assets/close.svg";

const Header = () => {
  const menuToggle = () => {
    const isSmallScreen = window.innerWidth < 640;

    if (isSmallScreen) {
      const nav = document.querySelector("#nav");
      const hamburger = document.querySelector("#nav-hamburger");
      const overlay = document.querySelector("#overlay");

      overlay.classList.toggle("hidden");
      nav.classList.toggle("hidden");
      nav.classList.toggle("flex");
      hamburger.src = nav.classList.contains("hidden") ? Menu : Close;
    }
  };

  return (
    <header className="relative z-20 mx-auto flex min-h-[72px] max-w-[1110px] items-center justify-between bg-pureWhite px-6 sm:px-10">
      <Link to={"/"}>
        <img src={Logo} alt="Photosnap Logo" />
      </Link>
      <nav
        className="absolute top-[72px] left-0 hidden min-h-[253px] min-w-full flex-col justify-center bg-pureWhite px-6 text-[15px] font-bold tracking-[2.5px] sm:relative sm:top-0 sm:flex sm:min-h-[auto] sm:min-w-[auto] sm:px-4 sm:text-xs"
        id="nav"
      >
        <ul className="mb-5 flex flex-col items-center gap-5 sm:mb-0 sm:flex-row sm:gap-[37px] sm:tracking-[2px]">
          <Link
            to={"/stories"}
            className="hover:opacity-50"
            onClick={() => menuToggle()}
          >
            STORIES
          </Link>
          <Link
            to={"/features"}
            className="hover:opacity-50"
            onClick={() => menuToggle()}
          >
            FEATURES
          </Link>
          <Link
            to={"/pricing"}
            className="hover:opacity-50"
            onClick={() => menuToggle()}
          >
            PRICING
          </Link>
        </ul>

        <hr className="mb-5 border-pureBlack opacity-25 sm:hidden" />
        <button className="min-h-[3rem] min-w-full bg-pureBlack font-bold tracking-[inherit] text-pureWhite sm:hidden">
          GET AN INVITE
        </button>
      </nav>
      <button className="hidden min-h-[40px] min-w-[158px] bg-pureBlack text-xs font-bold tracking-[2.5px] text-pureWhite hover:bg-lightGrey hover:text-pureBlack sm:block">
        GET AN INVITE
      </button>
      <button
        id="nav-toggle"
        className="sm:hidden"
        onClick={() => menuToggle()}
      >
        <img src={Menu} id="nav-hamburger" alt="Menu Toggle" />
      </button>
    </header>
  );
};

export default Header;
