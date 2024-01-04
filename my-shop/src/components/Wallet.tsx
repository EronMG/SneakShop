import React from "react";
import ProfileIcon from "../assets/Profile.svg";
import "../index.css";

interface WalletProps {
  walletTitle: string;
  walletAddress: string;
  changeWalletText: string;
  addWalletText: string;
}

const Wallet: React.FC<WalletProps> = ({
  walletTitle,
  walletAddress,
  changeWalletText,
  addWalletText,
}) => {
  return (
    <div className="fill rounded-full w-[831px] flex pt-[18.81px] px-[20px] pb-[21.43px] gap-[48.51px] items-center">
      <img
        src={ProfileIcon}
        alt="profile"
        className="rounded-full w-[170px] h-[170px] object-contain"
      />
      <div className="flex flex-col  gap-[55px]">
        <div className="flex flex-col gap-[14px]">
          <h2 className="font-gilMedium text-white text-[50px] leading-[45px]">
            {walletTitle}
          </h2>
          <p className="text-rgba text-[40px] font-gilMedium leading-[40px] uppercase">
            {walletAddress}
          </p>
        </div>
        <div className="flex gap-[30px]">
          <p className="text-white text-[16px] font-mono font-[400] underline underline-offset-2 leading-[16px]">
            {changeWalletText}
          </p>
          <p className="text-white text-[16px] font-mono font-[400] underline underline-offset-2 leading-[16px]">
            {addWalletText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
