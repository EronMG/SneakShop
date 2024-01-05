import React, { useContext, useEffect, useState, CSSProperties } from "react";
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

const Transfer = () => {
  const networkContext = useContext(NetworkContext);
  const sliderContext = useContext(SliderContext);

  if (!networkContext) {
    throw new Error("NetworkContext not found");
  }

  if (!sliderContext) {
    throw new Error("SliderContext not found");
  }

  const { selectedId, selectedName } = networkContext;
  const { isAnySliderAboveZero } = sliderContext;

  const [opacityState, setOpacityState] = useState({
    firstImgOpacity: 1,
    secondImgOpacity: 0,
  });

  function handleButtonClick() {
    if (isAnySliderAboveZero) {
      openModal();
    }
  }

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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [isExpanded, setExpanded] = useState(false);

  const handleBlockClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        selectedId ? "fillTrans" : "bg-white"
      } rounded-[30px] w-[564px] ${!isExpanded ? "h-[648px]" : "h-fit"}`}
    >
      {selectedId ? (
        <div className="p-[15px] flex flex-col gap-[29px]">
          <div className="flex flex-col gap-[30px] pl-[5px]">
            <h2 className="text-black font-gilMedium text-[50px] leading-[45px] uppercase pt-[5px]">
              transfer
            </h2>
            <div className="flex flex-col gap-[15px] border-b-[2px] border-black pb-[6px]">
              <span className="text-rgbablack font-mono font-[400] text-[16px] leading-[16px]">
                (Convert from)
              </span>
              <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                {selectedName}
              </h3>
            </div>
            <div className="flex flex-col gap-[15px] border-b-[1px] border-black pb-[4px]">
              <span className="text-rgbablack font-mono font-[400] text-[16px] leading-[16px]">
                (Total amount)
              </span>
              <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                $0,0
              </h3>
            </div>
            <div className="flex flex-col gap-[15px]">
              <span className="text-rgbablack font-mono font-[400] text-[16px] leading-[16px]">
                (Convert to)
              </span>
              <div
                onClick={handleBlockClick}
                className="flex justify-between pr-[5.36px] border-b-[1px] border-black pb-[4px]"
              >
                <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                  network
                </h3>
                <img src={ArrowBlack} alt="" />
              </div>
              {isExpanded && (
                <div className="expanded-content bg- rounded-[30px] px-[35px] py-[30px]">
                  <p>dfggdfgs</p>
                </div>
              )}
              <div className="flex justify-between pr-[5.36px] border-b-[1px] border-black pb-[4px]">
                <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                  token
                </h3>
                <img src={ArrowBlack} alt="" />
              </div>
              <div className="flex justify-between pr-[5.36px] border-b-[1px] border-black pb-[4px] items-end">
                <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                  $0,0
                </h3>
                <span className="text-rgbablack font-mono font-[400] text-[12px] leading-[12.028px]">
                  (You will receive)
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end pr-[5px] gap-[15px]">
            <span className="text-black font-mono font-[400] underline underline-offset-2 text-[16px] leading-[16px]">
              Add addres
            </span>
            <button
              onClick={handleButtonClick}
              style={buttonStyle}
              disabled={!isAnySliderAboveZero}
              className="relative bg-rgbalow w-full rounded-[30px] flex items-center justify-center py-[34.5px] h-[115px]"
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
              <div className="p-[15px] flex flex-col gap-[50px]">
                <h2 className="font-gilMedium text-[50px] leading-[45px] text-black uppercase pt-[5px] pl-[5px]">
                  confirm swap
                </h2>
                <div className="flex flex-col gap-[20px] pl-[5px]">
                  <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                    (You pay)
                  </span>
                  <div className="flex flex-col gap-[10px] overflow-scroll h-[300px]">
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
                    <p className="font-mono font-[400] text-black text-[16px] leading-[16px] underline underline-offset-1">
                      Show more
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
                    <div className="flex justify-between pl-[0px]">
                      <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        (Fee)
                      </span>
                      <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                        $0{" "}
                      </p>
                    </div>
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
        <div className="flex items-center h-full justify-center">
          <img src={LogoBlack} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default Transfer;
