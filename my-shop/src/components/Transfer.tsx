import React, {
  useContext,
  useEffect,
  useState,
  CSSProperties,
  useCallback,
} from "react";
import { useSpring, animated } from "react-spring";
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
import confirm1 from "../assets/Processing.svg";
import successImage from "../assets/Ok.svg";
import errorImage from "../assets/NOT.svg";
import CLOSE from "../assets/CLOSE.svg";

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
  const { selectedId, selectedName } = networkContext!;
  const { isAnySliderAboveZero } = sliderContext!;
  const currencies: string[] = ["USDC", "USDT", "dai", "frax"];
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [b, setB] = useState("");
  const [isExpandedToken, setExpandedToken] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [opacityState, setOpacityState] = useState({
    firstImgOpacity: 1,
    secondImgOpacity: 0,
  });

  const handleButtonClick = useCallback(() => {
    if (isAnySliderAboveZero) {
      openModal();
    }
  }, [isAnySliderAboveZero]);

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
    setActive(false);
    setSuccess(null);
  }
  const handleBlockClick = () => setExpanded(!isExpanded);
  const handleBlockClickToken = () => setExpandedToken(!isExpandedToken);

  // Кешированная функция обработчика клика
  const handleClickToken = useCallback(
    (item: string) => setSelectedCurrency(item),
    []
  );

  const handleNetworkNameClick = useCallback((name: string) => setB(name), []);

  const arr = [
    {
      name: "0.769725 BTC",
      img: btc,
      dol: "($32,103.4979)",
    },
    {
      name: "24.55 BNB",
      img: bnb,
      dol: "($5,644.7815)",
    },
    {
      name: "0.769725 BTC",
      img: btc,
      dol: "($32,103.4979)",
    },
    {
      name: "24.55 BNB",
      img: bnb,
      dol: "($5,644.7815)",
    },
    {
      name: "0.769725 BTC",
      img: btc,
      dol: "($32,103.4979)",
    },
    {
      name: "24.55 BNB",
      img: bnb,
      dol: "($5,644.7815)",
    },
    {
      name: "0.769725 BTC",
      img: btc,
      dol: "($32,103.4979)",
    },
    {
      name: "24.55 BNB",
      img: bnb,
      dol: "($5,644.7815)",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (loading) {
      // Ждем 2 секунды и затем меняем состояние
      const timeout = setTimeout(() => {
        setLoading(false);
        setSuccess(Math.random() < 0.5); // 50% шанс успеха или неудачи
      }, 2000);

      // Очистка таймера при размонтировании компонента или изменении loading
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  const handleConfirmClick = () => {
    setLoading(true);
  };

  const getResultText = () => {
    if (success === true) {
      return "Completed";
    } else if (success === false) {
      return "Declined";
    } else {
      return "Confirm Swap";
    }
  };

  const getResultTex2 = () => {
    if (success === true) {
      return "transaction completed";
    } else if (success === false) {
      return "transaction declined";
    } else {
      return "";
    }
  };

  const getResultText3 = () => {
    if (success === true) {
      return "Transaction info";
    } else if (success === false) {
      return "Transaction info";
    } else {
      return "";
    }
  };

  const getShadowClass = () => {
    if (success === true) {
      return "success-shadow";
    } else if (success === false) {
      return "error-shadow";
    } else {
      return ""; // Если нет успешности или неудачи, можете оставить пустую строку или другой класс по умолчанию
    }
  };
  const fadeInAnimation = useSpring({
    opacity: success !== null ? 1 : 0,
    transform:
      success !== null
        ? "translateX(0) scale(1)"
        : "translateX(20px) scale(0.8)",
  });
  const AnimatedImage = animated.img;
  const AnimatedText = animated.span;

  useEffect(() => {
    const isWindows = navigator.platform.indexOf("Win") > -1;
    if (isWindows) {
      document.body.classList.add("windows");
    }
  }, []);

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
                className="flex flex-col gap-[4px] px-[20px]"
              >
                <div className="flex justify-between">
                  <h3 className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                    {b ? b : "Network"}
                  </h3>
                  <img
                    src={ArrowBlack}
                    alt="arrow"
                    className={`${isExpanded ? "-rotate-90" : ""} `}
                  />
                </div>
                {isExpanded ? "" : <div className="w-full h-[1px] bg-black" />}
              </div>
              {isExpanded && (
                <div className="expanded-content rounded-[20px] px-[35px] py-[30px] flex flex-wrap gap-[10px] bg-white">
                  {networkData.map(({ id, name }) => (
                    <p
                      onClick={() => handleNetworkNameClick(name)}
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
                    {selectedCurrency ? (
                      <p className="">{selectedCurrency} </p>
                    ) : (
                      "Token"
                    )}
                  </h3>
                  <img
                    src={ArrowBlack}
                    alt=""
                    className={`${isExpandedToken ? "-rotate-90" : ""}`}
                  />
                </div>
                {isExpandedToken ? (
                  ""
                ) : (
                  <div className="w-full h-[1px] bg-black" />
                )}
              </div>
              {isExpandedToken && (
                <div className="expanded-content  rounded-[20px] px-[20px] py-[30px] flex flex-wrap gap-[10px] bg-white">
                  {currencies.map((item, index) => (
                    <p
                      key={index}
                      className={`text-black font-mono font-[400] underline underline-offset-2 text-[16px] leading-[16px] cursor-pointer ${
                        item === selectedCurrency ? "" : ""
                      }`}
                      onClick={() => handleClickToken(item)}
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
              <div
                className={`modal p-[15px] flex flex-col gap-[20px] ${getShadowClass()} `}
              >
                <img
                  src={CLOSE}
                  alt="icon"
                  className="w-6 h-6 absolute right-7 top-8 cursor-pointer"
                  onClick={closeModal}
                />
                <h2 className="font-gilMedium text-[50px] leading-[45px] text-black uppercase pt-[5px] pl-[5px]">
                  {getResultText()}
                </h2>
                <div className="flex flex-col gap-[20px] pl-[5px]">
                  <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                    (You pay)
                  </span>
                  <div
                    className={`flex flex-col gap-[10px] overflow-scroll min-h-[50px] ${
                      active ? "max-h-[140px]" : "max-h-[200px]"
                    }`}
                  >
                    {arr.map((item, index) => (
                      <div key={index} className="flex gap-[10px] items-center">
                        <img src={item.img} alt="icon" />
                        <p className="text-black font-gilMedium text-[30px] leading-[30px] uppercase">
                          {item.name}
                        </p>
                        <span className="text-rgbablack font-mono font-[400] text-[16px] leading-[16px]">
                          {item.dol}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`flex flex-col gap-[20px] pl-[4px]`}>
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
                  <div className={`flex items-end  gap-[23px] pt-[13px] `}>
                    <div className="h-[1px] bg-black w-[412px]" />
                    <p
                      className="smal font-mono font-[400] text-black text-[16px] leading-[16px] underline underline-offset-1 cursor-pointer"
                      onClick={handleActiveClick}
                    >
                      {active ? "Show less" : "Show more"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[15px] pt-[10px]">
                    <div
                      className={`justify-between pl-[0px] overflow-scroll h-[68px]  ${
                        loading || success !== null ? "hidden" : "flex"
                      }`}
                    >
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
                        <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          1 BNB = $229.66{" "}
                        </p>
                        <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          1 BNB = $229.66{" "}
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
                    <div
                      className={`flex justify-between pl-[0px]  ${
                        loading || success !== null ? "hidden" : "flex"
                      }`}
                    >
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
                    {loading && (
                      <div className="flex items-center justify-center">
                        {/* Картинка загрузки */}
                        <img
                          src={confirm1}
                          alt="loading"
                          className="w-[150px] h-[150px] rotate-image"
                        />
                      </div>
                    )}

                    {success !== null && !loading && (
                      <div className="flex items-center justify-center gap-2">
                        {/* Картинка "Успешно" или "Ошибка" */}
                        <AnimatedImage
                          src={success ? successImage : errorImage}
                          alt={success ? "success" : "error"}
                          className="w-[150px] h-[150px]"
                          style={fadeInAnimation}
                        />
                        <AnimatedText
                          className="text-black text-[40px] font-gilMedium uppercase w-[268px]"
                          style={fadeInAnimation}
                        >
                          {getResultTex2()}
                        </AnimatedText>
                      </div>
                    )}
                    {active && (
                      <div
                        className={`flex justify-between pl-[0px]  ${
                          loading || success !== null ? "hidden" : "flex"
                        }`}
                      >
                        <span className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          (Network cost)
                        </span>
                        <p className="text-rgbablack text-[16px] leading-[16px] font-mono font-[400]">
                          $22.5{" "}
                        </p>
                      </div>
                    )}

                    <a
                      href="https://etherscan.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black text-[16px] font-mono font-[400] underline-offset-2 underline text-center"
                    >
                      {getResultText3()}
                    </a>
                    <button
                      onClick={handleConfirmClick}
                      className={` text-white font-gilMedium text-[40px] leading-[40px] uppercase bg-black flex items-end justify-center py-[40px] w-[524px] rounded-[30px]   ${
                        loading || success !== null ? "hidden" : "flex"
                      }`}
                    >
                      approve
                      <span className="text-gray-400 text-base pl-2">
                        (BTC)
                      </span>
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
