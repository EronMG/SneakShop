import React, { useCallback, useContext, useState } from "react";
import Arrow from "../assets/Arrow.svg";
import Search from "../assets/Search.svg";
import "../index.css";
import { Slider } from "antd";
import { NetworkContext } from "../context/SelectedId";
import { SliderContext } from "../context/Slider";

interface CryptoItem {
  //интрефейс
  id: string;
  icon: string;
  name: string;
  cost: number;
}
interface SliderValues {
  [key: string]: number;
}

const Portfolio: React.FC = () => {
  const context = useContext(NetworkContext);
  const contextSlider = useContext(SliderContext);

  if (!context) {
    throw new Error("NetworkContext not found");
  }

  if (!contextSlider) {
    throw new Error("SliderContext not found");
  }

  const { selectedId } = context;
  //инфа с нашими криптовалютами

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cryptArr: CryptoItem[] = [
    {
      id: "1",
      icon: require("../assets/image5.svg").default,
      name: "Bitcoin (BTC)",
      cost: 0.0201,
    },
    {
      id: "2",
      icon: require("../assets/image12.svg").default,
      name: "Etherium (ETH)",
      cost: 0.1472,
    },
    {
      id: "3",
      icon: require("../assets/image15.svg").default,
      name: "BNB (BNB)",
      cost: 1.001,
    },
    {
      id: "4",
      icon: require("../assets/Group31.svg").default,
      name: "Solana (SOL)",
      cost: 2.35,
    },
    {
      id: "5",
      icon: require("../assets/Group32.svg").default,
      name: "XRP (XRP)",
      cost: 78.687,
    },
    {
      id: "6",
      icon: require("../assets/Group33.svg").default,
      name: "Cardano (ADA)",
      cost: 15.42,
    },
    {
      id: "6",
      icon: require("../assets/Group33.svg").default,
      name: "Cardano (ADA)",
      cost: 15.42,
    },
    {
      id: "4",
      icon: require("../assets/Group31.svg").default,
      name: "Solana (SOL)",
      cost: 2.35,
    },
    {
      id: "6",
      icon: require("../assets/Group33.svg").default,
      name: "Cardano (ADA)",
      cost: 15.42,
    },
    {
      id: "2",
      icon: require("../assets/image12.svg").default,
      name: "Etherium (ETH)",
      cost: 0.1472,
    },
    {
      id: "3",
      icon: require("../assets/image15.svg").default,
      name: "BNB (BNB)",
      cost: 1.001,
    },
    {
      id: "6",
      icon: require("../assets/Group33.svg").default,
      name: "Cardano (ADA)",
      cost: 15.42,
    },
  ];

  const [sliderValues, setSliderValues] = useState<SliderValues>(
    cryptArr.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const { setAnySliderAboveZero } = contextSlider;

  const onSliderChange = useCallback(
    (value: number, id: string) => {
      setSliderValues((prev) => {
        const updatedValues = { ...prev, [id]: value };

        // Проверяем, есть ли слайдер с значением выше 0
        const isAboveZero = Object.values(updatedValues).some((val) => val > 0);
        setAnySliderAboveZero(isAboveZero);

        return updatedValues;
      });
    },
    [setAnySliderAboveZero]
  );

  const maxSliderValue = 100;

  const handleSpanClick = (id: string) => {
    // Устанавливаем максимальное значение для конкретного слайдера
    onSliderChange(maxSliderValue, id);
  };

  const handleAllToMaxClick = () => {
    // Устанавливаем максимальное значение для всех слайдеров
    const updatedValues: SliderValues = {};
    cryptArr.forEach((item) => {
      updatedValues[item.id] = maxSliderValue;
    });

    setSliderValues(updatedValues);
    setAnySliderAboveZero(true);
  };

  const handleAllToZeroClick = () => {
    // Устанавливаем значение 0 для всех слайдеров
    const updatedValues: SliderValues = {};
    cryptArr.forEach((item) => {
      updatedValues[item.id] = 0;
    });

    setSliderValues(updatedValues);
    setAnySliderAboveZero(false);
  };
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInputValueChange = useCallback(
    (value: number, id: string) => {
      setSliderValues((prev) => {
        // Находим элемент массива по id
        const currentItem = cryptArr.find((item) => item.id === id);
        if (!currentItem) {
          return prev;
        }

        // Приводим значение введенное в input к процентам
        const percentageValue = (value / currentItem.cost) * 100;
        const updatedValues = { ...prev, [id]: percentageValue };

        // Ограничиваем максимальное и минимальное значения в слайдере
        if (percentageValue > 100) {
          updatedValues[id] = 100;
        } else if (percentageValue < 0) {
          updatedValues[id] = 0;
        }

        const isAboveZero = Object.values(updatedValues).some((val) => val > 0);
        setAnySliderAboveZero(isAboveZero);
        return updatedValues;
      });
    },
    [cryptArr, setAnySliderAboveZero]
  );
  const handleSliderInputChange = useCallback(
    (value: number, id: string) => {
      setSliderValues((prev) => {
        const updatedValues = { ...prev, [id]: value };
        const isAboveZero = Object.values(updatedValues).some((val) => val > 0);
        setAnySliderAboveZero(isAboveZero);

        setInputValue(value); // Обновляем значение input при изменении слайдера

        return updatedValues;
      });
    },
    [setAnySliderAboveZero]
  );

  return (
    <div className="w-full">
      {selectedId ? (
        <div className="pt-[20px] pr-[15px] pl-[20px] flex flex-col gap-[32px]">
          <div className="flex gap-[24.5px] items-center">
            <h2 className="text-white font-gilMedium leading-[45px] text-[50px] uppercase">
              Portfolio
            </h2>
            <img src={Arrow} alt="" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[15px] items-end">
              <div className="flex gap-[7.32px] border-b-[1px] border-rgba w-[625px]">
                <img src={Search} alt="" className=" rotate-[-45]" />
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className=" bg-transparent outline-none text-rgba w-full"
                  style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                    paddingRight: "0.5em",
                  }}
                />
              </div>
              <span
                onClick={handleAllToZeroClick}
                className="font-mono font-[400] text-rgba text-[12px] leading-[12px] underline underline-offset-2 cursor-pointer"
              >
                All to zero
              </span>
              <span
                onClick={handleAllToMaxClick}
                className="font-mono font-[400] text-rgba text-[12px] leading-[12px] underline underline-offset-2 cursor-pointer"
              >
                All to max
              </span>
            </div>
            {cryptArr.map((item) => (
              <div
                key={item.id}
                className="bg-[#464646] rounded-[30px] px-[10px] flex gap-[40px] md:gap-[80px]"
              >
                <div className="flex items-center gap-[10px]">
                  <img src={item.icon} alt="" />
                  <div className="flex flex-col gap-[8px] justify-center">
                    <h2 className="font-mono font-[400] text-rgba text-[12px] leading-[12.028px] relative top-[7.5px] w-[126px]">
                      {item.name}
                    </h2>
                    <span className="font-gilMedium leading-[40px] text-[30px] text-white uppercase">
                      {item.cost}
                    </span>
                  </div>
                </div>
                <div className="flex gap-[33px] ">
                  <div className="flex gap-[26px] items-center">
                    <Slider
                      value={sliderValues[item.id] || 0}
                      classNames={{
                        handle:
                          "before:!w-5 before:!h-5 before:!-top-[5px] before:rounded-full before:!bg-white after:hidden before:border-0",
                      }}
                      onChange={(value) =>
                        handleSliderInputChange(value as number, item.id)
                      }
                      trackStyle={{
                        backgroundColor: "white",
                        height: 10,
                        top: 0,
                      }}
                      className="sfill !w-[240px] rounded-[30px] m-0 relative "
                      marks={{
                        0: "0%",
                        25: "25%",
                        50: "50%",
                        75: "75%",
                        100: "100%",
                      }}
                      tooltipVisible={false}
                    />
                    <span
                      onClick={() => handleSpanClick(item.id)}
                      className="font-mono font-[400] text-[16px] leading-[16px] text-white underline underline-offset-2 pt-[14px] cursor-pointer"
                    >
                      max
                    </span>
                  </div>
                  <p
                    className={`font-gilMedium text-[30px] leading-[40px] uppercase flex items-center ${
                      sliderValues[item.id] > 0 ? "text-white" : "text-rgba"
                    }`}
                  >
                    <input
                      type="number"
                      value={((sliderValues[item.id] || 0) / 100) * item.cost}
                      onChange={(e) =>
                        handleInputValueChange(
                          parseFloat(e.target.value),
                          item.id
                        )
                      }
                      min={0}
                      max={item.cost}
                      step={0.00001}
                      className={`bg-transparent outline-none text-rgba w-[157px] ${
                        sliderValues[item.id] > 0 ? "text-white" : ""
                      }`}
                      style={{
                        paddingRight: "0.5em",
                      }}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-[20px]">
          <div className="flex gap-[24.5px]">
            {" "}
            <h2 className="text-white font-gilMedium leading-[45px] text-[50px] uppercase">
              Portfolio
            </h2>
            <img src={Arrow} alt="" />
          </div>
          <div className="h-[520px] flex items-center justify-center w-full">
            <p className="font-mono font-[400] text-[16px] leading-[16px] underline underline-offset-2 text-rgba">
              (Choose any available network to continue)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
