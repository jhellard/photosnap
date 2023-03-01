import Logo from "../../assets/shared/desktop/logo-white.svg";

import { Link } from "react-router-dom";

import Facebook from "./assets/facebook.svg";
import YouTube from "./assets/youtube.svg";
import Twitter from "./assets/twitter.svg";
import Pinterest from "./assets/pinterest.svg";
import Instagram from "./assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="flex grid-cols-2 grid-rows-3 flex-col items-center bg-pureBlack py-14 text-pureWhite sm:grid sm:px-10 sm:py-12">
      <img className="mb-8 sm:mb-0" src={Logo} alt="Photosnap Logo" />
      {/* TODO: MAKE ICONS WHITE */}
      <ul className="mb-[49px] flex gap-[13.33px] sm:row-start-3 sm:mb-0">
        <li>
          <a href="#">
            <img src={Facebook} alt="Facebook logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={YouTube} alt="YouTube logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} alt="Twitter logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Pinterest} alt="Pinterest logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Instagram} alt="Instagram logo" />
          </a>
        </li>
      </ul>
      <ul className="mb-[120px] flex flex-col items-center gap-[19px] text-[12px] font-bold tracking-[2px] sm:row-start-2 sm:mb-[36px] sm:flex-row">
        <Link to={"/"}>HOME</Link>
        <Link to={"/stories"}>STORIES</Link>
        <Link to={"/features"}>FEATURES</Link>
        <Link to={"/pricing"}>PRICING</Link>
      </ul>
      <button className="mb-[34px] flex items-center gap-[18px] text-[12px] font-bold tracking-[2px] sm:mb-0 sm:justify-end">
        GET AN INVITE
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g fill="none" fillRule="evenodd" stroke="currentColor">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </button>
      <span className="mb-14 text-[15px] opacity-50 sm:row-start-3 sm:mb-0 sm:flex sm:justify-end">
        Copyright 2019. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
