import React, { useContext, useState } from "react";
import "../index.css";
import { NetworkContext } from "../context/SelectedId";

interface Network {
  id: string;
  icon: string;
  name: string;
  cost: number;
  procent: string;
}

interface NetworksProps {
  netTitle: string;
}

const networkData: Network[] = [
  {
    id: "1",
    icon: require("../assets/image12.svg").default,
    name: "Etherium",
    cost: 1.642,
    procent: "69.6%",
  },
  {
    id: "2",
    icon: require("../assets/Group22.svg").default,
    name: "Arbitrum",
    cost: 348,
    procent: "14.7%",
  },
  {
    id: "3",
    icon: require("../assets/Group23.svg").default,
    name: "ZkSync",
    cost: 122,
    procent: "5.1%",
  },
  {
    id: "4",
    icon: require("../assets/image14.svg").default,
    name: "Polygon",
    cost: 92,
    procent: "3.9%",
  },
  {
    id: "5",
    icon: require("../assets/image15.svg").default,
    name: "BSC",
    cost: 56,
    procent: "2.4%",
  },
  {
    id: "6",
    icon: require("../assets/Group24.svg").default,
    name: "Base",
    cost: 52,
    procent: "2.2%",
  },
  {
    id: "7",
    icon: require("../assets/image20.svg").default,
    name: "Optimism",
    cost: 37,
    procent: "1.6%",
  },
  {
    id: "8",
    icon: require("../assets/Group25.svg").default,
    name: "Linea",
    cost: 12,
    procent: "0.5%",
  },
];

const Networks: React.FC<NetworksProps> = ({ netTitle }) => {
  const context = useContext(NetworkContext);

  if (!context) {
    throw new Error("NetworkContext not found");
  }

  const { selectedId, setSelectedId, setSelectedName } = context;

  const handleClick = (id: string, name: string) => {
    if (selectedId === id) {
      setSelectedId(null);
      setSelectedName(null);
    } else {
      setSelectedId(id);
      setSelectedName(name);
    }
  };
  return (
    <div className="fillnet rounded-[30px] pt-[19px] pb-[20px] px-[21px] flex flex-col gap-[31px]">
      <h2 className="text-white font-gilMedium uppercase text-[50px] leading-[45px]">
        {netTitle}
      </h2>
      <div className="flex flex-wrap gap-[20px]">
        {networkData.map(({ id, icon, name, cost, procent }) => (
          <div
            key={id}
            onClick={() => handleClick(id, name)}
            className={`${
              selectedId === id ? "idfill" : "bg-[#464646]"
            } rounded-[50px] w-fit flex gap-[10px] pt-[6px] pr-[20px] pl-[10px] pb-[10px] items-center`}
          >
            <img src={icon} alt="crypto" className="h-[40px]" />
            <div className="flex flex-col gap-[10px]">
              <span
                className={`${
                  selectedId === id ? "text-rgbablack" : "text-rgba"
                } font-mono text-[12px] leading-[12.028px] font-[400]`}
              >
                {name}
              </span>
              <div className="flex gap-[10px] items-end">
                <p
                  className={`font-gilMedium leading-[22px] text-[30px] uppercase ${
                    selectedId === id ? "text-black" : "text-white"
                  }`}
                >
                  ${cost}
                </p>
                <span
                  className={`${
                    selectedId === id ? "text-rgbablack" : "text-rgba"
                  } font-gilMedium leading-[11px] text-[15px] uppercase flex`}
                >
                  {procent}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Networks;
