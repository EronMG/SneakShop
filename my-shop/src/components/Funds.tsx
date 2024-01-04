import React from "react";
import Vector from "../assets/1.svg";
import "../index.css";
const Funds = () => {
  return (
    <div className="fillgraph relative px-[20px] py-[17px] flex flex-col justify-between rounded-[30px]">
      <h2 className="text-white font-gilMedium text-[50px] leading-[45px] uppercase pt-[3px]">
        Your funds
      </h2>
      <img
        src={Vector}
        alt="graph"
        className="absolute top-[70px] left-[52px]"
      />
      <div className="flex gap-[265px] items-end">
        <div className="flex items-end gap-[21.5px]">
          <p className="text-white font-gilMedium text-[40px] leading-[40px] uppercase">
            $2,361
          </p>
          <span className="text-rgba font-gilMedium text-[20px] leading-[20px] uppercase">
            +12.3%
          </span>
        </div>
        <p className="font-mono font-[400] text-white text-[16px] leading-[16px]">
          (month)
        </p>
      </div>
    </div>
  );
};

export default Funds;
