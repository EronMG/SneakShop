import React, {
  useContext,
  useEffect,
  useState,
  CSSProperties,
  useCallback,
} from "react";
import { NetworkContext } from "../context/SelectedId";
import LogoBlack from "../assets/LogoBlack.svg";
import LogoGray from "../assets/LogoGray.svg";
import "../index.css";
import ArrowBlack from "../assets/ArrowBlack.svg";
import { SliderContext } from "../context/Slider";
import FullLogo from "../assets/FullLogo.svg";
import Modal from "./Modal";
import btc from "../assets/image5.svg";
import bnb from "../assets/image15.svg";
import { networkData } from "./Networks";

const Transfer = () => {
  const networkContext = useContext(NetworkContext);
  const sliderContext = useContext(SliderContext);

  if (!networkContext) {
    throw new Error("NetworkContext not found");
  }

  if (!sliderContext) {
    throw new Error("SliderContext not found");
  }
  const [active, setActive] = useState(false);
  const { selectedId, selectedName, setSelectedId, setSelectedName } =
    networkContext;
  const { isAnySliderAboveZero } = sliderContext;

  const [isExpandedToken, setExpandedToken] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [opacityState, setOpacityState] = useState({
    firstImgOpacity: 1,
    secondImgOpacity: 0,
  });

  function handleButtonClick() {
    if (isAnySliderAboveZero) {
      openModal();
    }
  }
  const handleActiveClick = useCallback(() => {
    setActive(!active);
  }, [active]);

  useEffect(() => {
    setOpacityState({
      firstImgOpacity: isAnySliderAboveZero ? 0 : 1,
      secondImgOpacity: isAnySliderAboveZero ? 1 : 0,
    });
  }, [isAnySliderAboveZero]);

  const buttonStyle: CSSProperties = {
    backgroundColor: isAnySliderAboveZero ? "black" : "rgba(0, 0, 0, 0.30)",
    transition: "background-color 700ms ease-in-out",
  };

  const firstImgStyle: CSSProperties = {
    opacity: opacityState.firstImgOpacity,
    transition: "opacity 700ms ease-in-out",
    position: "absolute",
  };

  const secondImgStyle: CSSProperties = {
    opacity: opacityState.secondImgOpacity,
    transition: "opacity 700ms ease-in-out",
    position: "absolute",
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (id: string, name: string) => {
    if (selectedId === id) {
      setSelectedId(id);
      setSelectedName(name);
    } else {
      setSelectedId(id);
      setSelectedName(name);
    }
  };
  const handleBlockClick = () => {
    setExpanded(!isExpanded);
  };

  const handleBlockClickToken = () => {
    setExpandedToken(!isExpandedToken);
  };

  return (
    <div
      className={`  min-w-[564px] ${!isExpanded ? "min-h-[648px]" : "h-fit"} ${
        !isExpandedToken ? "min-h-[648px]" : "h-fit"
      } `}
    >
      {selectedId ? (
        <div
          className={`rounded-[30px] ${
            selectedId ? "fillTrans" : "bg-white"
          } flex flex-col gap-[29px] pb-[15px]`}
        >
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-black font-gilMedium text-[50px] leading-[45px] uppercase pt-[20px] pl-[20px]">
              transfer
            </h2>
            <div className="flex flex-col gap-[4px] pb-[6px] pl-[20px] pr-[20px] pt-[12px]">
              <div className="flex flex-col gap-[15px] ">
                <span className="text-rgbablack font-mono font-[400] text-[16px] leading-[16px]">
                  (Convert from)
                </span>
                <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                  {selectedName}
                </h3>
              </div>
              <div className="w-full h-[2px] bg-black" />
            </div>
            <div className="flex flex-col gap-[5px] pb-[4px] px-[20px] pt-[4px]">
              <div className="flex flex-col gap-[15px] ">
                <span className="text-rgbablack font-mono font-[400] text-[16px] leading-[16px]">
                  (Total amount)
                </span>
                <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                  $0,0
                </h3>
              </div>
              <div className="w-full h-[1px] bg-black" />
            </div>
            <div className="flex flex-col gap-[15px] pt-[5px]">
              <span className="text-rgbablack font-mono font-[400] text-[16px] leading-[16px] pl-[20px]">
                (Convert to)
              </span>
              <div
                onClick={handleBlockClick}
                className="flex flex-col gap-[4px] border-black  px-[20px]"
              >
                <div className="flex justify-between">
                  <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                    network
                  </h3>
                  <img
                    src={ArrowBlack}
                    alt="arrow"
                    className={`${isExpanded ? "-rotate-90" : ""} `}
                  />
                </div>
                <div className="w-full h-[1px] bg-black" />
              </div>
              {isExpanded && (
                <div className="expanded-content rounded-[20px] px-[35px] py-[30px] flex flex-wrap gap-[10px] bg-white">
                  {networkData.map(({ id, name }) => (
                    <p
                      onClick={() => handleClick(id, name)}
                      key={id}
                      className="text-black font-mono font-[400] underline underline-offset-2 text-[16px] leading-[16px] cursor-pointer"
                    >
                      {name}
                    </p>
                  ))}
                </div>
              )}
              <div
                className="flex flex-col gap-[4px] px-[20px]"
                onClick={handleBlockClickToken}
              >
                <div className="flex justify-between">
                  <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                    token
                  </h3>
                  <img
                    src={ArrowBlack}
                    alt=""
                    className={`${isExpandedToken ? "-rotate-90" : ""}`}
                  />
                </div>
                <div className="w-full h-[1px] bg-black" />
              </div>
              {isExpandedToken && (
                <div className="expanded-content bg- rounded-[20px] px-[20px] py-[30px] flex flex-wrap gap-[10px] bg-white">
                  {["USDC", "USDT", "dai", "frax"].map((item, index) => (
                    <p
                      key={index}
                      className="text-black font-mono font-[400] underline underline-offset-2 text-[16px] leading-[16px] cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
              <div className="flex flex-col gap-[4px]  px-[20px]">
                <div className="flex justify-between items-end">
                  {" "}
                  <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase ">
                    $0,0
                  </h3>
                  <span className="text-rgbablack font-mono font-[400] text-[12px] leading-[12.028px]">
                    (You will receive)
                  </span>
                </div>
                <div className="w-full h-[1px] bg-black" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end pr-[15px] gap-[15px] pl-[15px]">
            <span className="text-black font-mono font-[400] underline underline-offset-2 text-[16px] leading-[16px] pr-[5px] ">
              Add addres
            </span>
            <button
              onClick={handleButtonClick}
              style={buttonStyle}
              disabled={!isAnySliderAboveZero}
              className="relative bg-rgbalow w-full rounded-[30px] flex items-center justify-center py-[34.5px] h-[118px]"
            >
              <img
                src={LogoGray}
                style={firstImgStyle}
                className="h-[51px]"
                alt="logo"
              />
              <img
                src={FullLogo}
                style={secondImgStyle}
                className="h-[51px]"
                alt="logo"
              />
            </button>
            <Modal
              isOpen={modalIsOpen}
              contentLabel="Example Modal"
              onRequestClose={closeModal}
            >
              <div className="p-[15px] flex flex-col gap-[30px]">
                <h2 className="font-gilMedium text-[50px] leading-[45px] text-black uppercase pt-[5px] pl-[5px]">
                  confirm swap
                </h2>
                <div className="flex flex-col gap-[20px] pl-[5px]">
                  <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                    (You pay)
                  </span>
                  <div
                    className={`flex flex-col gap-[10px] overflow-scroll ${
                      active ? "h-[140px]" : "h-[200px]"
                    }`}
                  >
                    <div className="flex gap-[10px] items-center">
                      <img src={bnb} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        24.55 BNB
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        ($5,644.7815)
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={bnb} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        24.55 BNB
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        ($5,644.7815)
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={btc} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        0.769725 BTC
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400] ">
                        ($32,103.4979)
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={bnb} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        24.55 BNB
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        ($5,644.7815)
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={bnb} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        24.55 BNB
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        ($5,644.7815)
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={bnb} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        24.55 BNB
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        ($5,644.7815)
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={bnb} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        24.55 BNB
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        ($5,644.7815)
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={bnb} alt="" />
                      <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                        24.55 BNB
                      </p>
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        ($5,644.7815)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] pl-[4px]">
                  <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                    (You receive)
                  </span>
                  <div className="flex gap-[15px] items-center">
                    <div className="text-black bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center text-[25px]">
                      $
                    </div>
                    <p className="font-gilMedium text-[30px] leading-[30px] text-black uppercase">
                      37,748.2794
                    </p>
                  </div>
                  <div className="flex items-end  gap-[23px] pt-[13px]">
                    <div className="h-[1px] bg-black w-[412px]" />
                    <p
                      className="font-mono font-[400] text-black text-[16px] leading-[16px] underline underline-offset-1 cursor-pointer"
                      onClick={handleActiveClick}
                    >
                      {active ? "Show less" : "Show more"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[15px] pt-[10px]">
                    <div className="flex justify-between pl-[0px]">
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        (Rate)
                      </span>
                      <div className="flex flex-col items-end gap-[10px]">
                        <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          1 BTC = $41,732.27{" "}
                        </p>
                        <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          1 BNB = $229.66{" "}
                        </p>
                      </div>
                    </div>
                    {active && (
                      <div className="flex justify-between pl-[0px]">
                        <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          Max. slippage
                        </span>
                        <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          5%
                        </p>
                      </div>
                    )}
                    <div className="flex justify-between pl-[0px]">
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        (Fee)
                      </span>
                      <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        $0{" "}
                      </p>
                    </div>
                    {active && (
                      <div className="flex justify-between pl-[0px]">
                        <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          (Fee)
                        </span>
                        <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          $0{" "}
                        </p>
                      </div>
                    )}
                    <div className="flex justify-between pl-[0px]">
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        (Network cost)
                      </span>
                      <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        $22.5{" "}
                      </p>
                    </div>
                    <button className="text-white font-gilMedium text-[40px] leading-[40px] uppercase bg-black flex items-center justify-center py-[46px] w-[534px] rounded-[30px]">
                      confirm swap
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-[648px] justify-center bg-white rounded-[30px]">
          <img src={LogoBlack} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default Transfer;
