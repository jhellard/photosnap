import Logo from "../../assets/shared/desktop/logo-white.svg";

import { Link } from "react-router-dom";

import Facebook from "./assets/facebook.svg";
import YouTube from "./assets/youtube.svg";
import Twitter from "./assets/twitter.svg";
import Pinterest from "./assets/pinterest.svg";
import Instagram from "./assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-pureBlack pt-14 text-pureWhite">
      <img className="mb-8" src={Logo} alt="Photosnap Logo" />
      {/* TODO: MAKE ICONS WHITE */}
      <ul className="mb-[49px] flex gap-[13.33px]">
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

      {/* TODO: ADD ROUTER LINKS */}
      <ul className="mb-[120px] flex flex-col items-center gap-[19px] text-[12px] font-bold tracking-[2px]">
        <Link to={"/"}>HOME</Link>
        <Link to={"/stories"}>STORIES</Link>
        <li className="opacity-50">FEATURES</li>
        <li className="opacity-50">PRICING</li>
      </ul>
      <button className="mb-[34px] flex items-center gap-[18px] text-[12px] font-bold tracking-[2px]">
        GET AN INVITE
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g fill="none" fillRule="evenodd" stroke="currentColor">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </button>
      <span className="mb-14 text-[15px] opacity-50">
        Copyright 2019. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
