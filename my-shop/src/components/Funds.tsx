import React from "react";
import "../index.css";
import Example from "./Graph";
const Funds = () => {
  return (
    <div className="fillgraph relative px-[20px] py-[17px] flex flex-col justify-between rounded-[30px]">
      <h2 className="text-white font-gilMedium text-[50px] leading-[45px] uppercase pt-[3px]">
        Your funds
      </h2>
      <Example />
      <div className="flex gap-[265px] items-end">
        <div className="flex items-end gap-[21.5px]">
          <p className="text-white font-gilMedium text-[40px] leading-[40px] uppercase">
            $2,361
          </p>
          <span className="text-rgba font-gilMedium text-[20px] leading-[20px] uppercase">
            +12.3%
          </span>
        </div>
        <p className="font-mono font-[400] text-rgba text-[16px] leading-[16px]">
          (month)
        </p>
      </div>
    </div>
  );
};

export default Funds;
