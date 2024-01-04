import React from "react";
import logo from "../assets/Group1.svg";
import ProfileIcon from "../assets/Profile.svg";
import Wallet from "../components/Wallet";
import Networks from "../components/Networks";
import Portfolio from "../components/Portfolio";
import "../index.css";
import { NetworkProvider } from "../context/SelectedId";
import Transfer from "../components/Transfer";
import { Link } from "react-router-dom";
import { SliderProvider } from "../context/Slider";
const Nav = () => {
  return (
    <div className="flex pt-[21px] pb-[19px] justify-between px-[30px]">
      <span className="text-white font-mono font-[400] underline text-[16px] leading-[16px] pt-[3.5px] underline-offset-[1.8px]">
        About
      </span>
      <Link to="/">
        <img src={logo} alt="profile" className="ml-[158.7px]" />
      </Link>
      <div className="flex  gap-[16px]">
        <img src={ProfileIcon} alt="" className="rounded-full object-contain" />
        <span className="text-white font-mono font-[400] underline text-[16px] leading-[16px] pt-[3.5px] underline-offset-[1.8px]">
          0xE07eA.....519BF
        </span>
      </div>
    </div>
  );
};
const Profile = () => {
  return (
    <SliderProvider>
      <NetworkProvider>
        <Nav />
        <div className="px-[15px] flex flex-col gap-[15px] ">
          <Wallet
            walletTitle={"WALLET:"}
            walletAddress={"0xE07eA.....519BF"}
            changeWalletText={"Change main wallet"}
            addWalletText={"Add wallet"}
          />
          <Networks netTitle={"networks"} />
          <div className="fillport flex justify-between rounded-[30px] min-h-[648px]">
            <Portfolio />
            <Transfer />
          </div>
        </div>
      </NetworkProvider>
    </SliderProvider>
  );
};

export default Profile;
