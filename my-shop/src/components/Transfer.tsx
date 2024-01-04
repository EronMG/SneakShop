import React, { useContext, useEffect, useState, CSSProperties } from "react";
import { NetworkContext } from "../context/SelectedId";
import LogoBlack from "../assets/LogoBlack.svg";
import LogoGray from "../assets/LogoGray.svg";
import "../index.css";
import ArrowBlack from "../assets/ArrowBlack.svg";
import { SliderContext } from "../context/Slider";
import FullLogo from "../assets/FullLogo.svg";
import Modal from "./Modal";

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

  return (
    <div
      className={`${
        selectedId ? "fillTrans" : "bg-white"
      } rounded-[30px] w-[564px] h-[648px]`}
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
              <div className="flex justify-between pr-[5.36px] border-b-[1px] border-black pb-[4px]">
                <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                  network
                </h3>
                <img src={ArrowBlack} alt="" />
              </div>
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
              <p>werqwer</p>
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
