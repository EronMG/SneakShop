import React from "react";
import logo from "../assets/Group1.svg";
const Nav = () => {
  return (
    <div className="flex pt-[21px] pb-[21px] justify-between px-[30px]">
      <span className="text-white font-mono font-[400] underline text-[16px] leading-[16px] pt-[3.5px] underline-offset-[1.8px]">
        About
      </span>
      <img src={logo} alt="" className="ml-[88.7px]" />
      <span className="text-white font-mono font-[400] underline text-[16px] leading-[16px] pt-[3px] underline-offset-[1.8px]">
        Connect wallet
      </span>
    </div>
  );
};

export default Nav;
