// import JSConfetti from "js-confetti";
import { useState } from "react";
import "../styles/Content.scss";
import DadaImg from "../../public/vts-2022-11-02_06h44_01.png";
import YodaImg from "../../public/vts-2021-12-25_22h52_13.png";
import Loader from "../ui/Loader";
import Title from "../ui/Title";
import Divider from "../components/Divider";
import BusInfoButtons from "../features/BusInfoButtons";
import ActivityInfo from "../features/ActivityInfo";
import ProgressBar from "../ui/ProgressBar";

import FundraisingResults from "../features/FundraisingResults";
import FundraisingInfoCard from "../features/FundraisingInfoCard";
import IntroBtnGroup from "../features/IntroBtnGroup";
import ProgressBarGroup from "../features/ProgressBarGroup";

const currentAmount = 1711;
const totalAmount = 90911;
const updateDate = "2024/02/12";
const targetAmount = 90000;
// const currentState = 3;

const isFinished = totalAmount >= targetAmount;

function Content() {
  const [isLoading, setIsLoading] = useState(true);
  let imgLoadedNum = 0;

  const imageLoad = () => {
    imgLoadedNum++;
    imgLoadedNum === 2 && setIsLoading(false);
  };

  // useEffect(() => {
  //   if (isFinished) {
  //     const confetti = new JSConfetti();
  //     confetti.addConfetti({
  //       confettiNumber: 50,
  //     });
  //     confetti.addConfetti({
  //       emojis: ["🍗"],
  //       emojiSize: 30,
  //       confettiNumber: 50,
  //     });
  //   }
  // }, []);

  return (
    <main>
      <div
        className={
          "flex justify-center my-20 " + " " + (isLoading ? "" : "hidden")
        }
      >
        <Loader />
      </div>
      <div className={isLoading ? "hidden" : "block"}>
        <div className="content-container flex flex-col items-center relative space-y-4 mt-8 mb-12 mx-auto px-6 w-full max-w-lg sm:max-w-xl sm:space-y-9 md:max-w-3xl lg:max-w-4xl">
          <div className="fade_in_anime w-full">
            <BusInfoButtons />
          </div>
          <div className="fade_in_anime w-full">
            <ActivityInfo />
          </div>
          <div className="fade_in_anime w-full">
            {!isFinished ? (
              <ProgressBar
                targetAmount={targetAmount}
                currentAmount={currentAmount}
                updateDate={updateDate}
              />
            ) : (
              <>
                <div>
                  <span className="flex justify-center">
                    <Divider />
                  </span>
                  <Title title1="募資全數達標!!" title2="感謝大家支持!!" />
                  {/* <Divider /> */}
                </div>
                {<FundraisingResults />}
                {/* <p className="text-xs text-end">更新時間：{updateDate}</p> */}
              </>
            )}
          </div>
          <div className="fade_in_anime w-full">
            <FundraisingInfoCard />
          </div>
          {isFinished || (
            <div className="fade_in_anime w-full">
              <ProgressBarGroup />
            </div>
          )}

          <div className="fade_in_anime w-full pt-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-7">
            <IntroBtnGroup />
          </div>
        </div>
        <div className="dada-image">
          <img src={DadaImg} alt="" onLoad={imageLoad} />
        </div>
        <div className="yoda-image">
          <img src={YodaImg} alt="" onLoad={imageLoad} />
        </div>
      </div>
    </main>
  );
}

export default Content;
