import styled from "styled-components";
// import JSConfetti from "js-confetti";
import { useState } from "react";
import DadaImg from "../../public/vts-2022-11-02_06h44_01.png";
import YodaImg from "../../public/vts-2021-12-25_22h52_13.png";
// import CountUp from "react-countup";
import Loader from "../ui/Loader";
import Title from "../ui/Title";
import Divider from "../components/Divider";
import BusInfoButtons from "../features/BusInfoButtons";
import ActivityInfo from "../features/ActivityInfo";
import ProgressBar from "../ui/ProgressBar";
// import Card from "../components/Card";
// import CardItem from "../ui/CardItem";
// import Button from "../ui/Button";
import FinishedProgressBar from "../ui/FinishedProgressBar";
// import FinalFinishedProgressBar from "../ui/FinalFinishedProgressBar";
import LockedProgressBar from "../ui/LockedProgressBar";
// import Modal from "../ui/Modal";

// import AttachMoneyRound from "@ricons/material/AttachMoneyRound";
// import AssistantPhotoOutlined from "@ricons/material/AssistantPhotoOutlined";
// import AvTimerRound from "@ricons/material/AvTimerRound";
// import CalendarTodayRound from "@ricons/material/CalendarTodayRound";
// import LocationOnOutlined from "@ricons/material/LocationOnOutlined";
// import AutoAwesomeOutlined from "@ricons/material/AutoAwesomeOutlined";
// import LiveHelpRound from "@ricons/material/LiveHelpRound";
// import TipsAndUpdatesRound from "@ricons/material/TipsAndUpdatesRound";
// import ShoppingBagFilled from "@ricons/material/ShoppingBagFilled";
import FundraisingResults from "../features/FundraisingResults";
import FundraisingInfoCard from "../features/FundraisingInfoCard";
import IntroBtnGroup from "../features/IntroBtnGroup";

const StyledContent = styled.main`
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 1200px;
  }

  @media (min-width: 1280px) {
    max-width: 1350px;
  }
`;

const Container = styled.div`
  .fade_in_anime:nth-child(1) {
    opacity: 0;
    animation: FadeIn 1s 0.7s forwards ease;
  }

  .fade_in_anime:nth-child(2) {
    position: relative;
    opacity: 0;
    animation: FadeIn 1s 1.2s forwards ease;
  }

  .fade_in_anime:nth-child(3) {
    position: relative;
    opacity: 0;
    animation: FadeIn 1s 1.7s forwards ease;
  }

  .fade_in_anime:nth-child(4) {
    position: relative;
    opacity: 0;
    animation: FadeIn 1s 2.2s forwards ease;
  }

  .fade_in_anime:nth-child(5) {
    position: relative;
    opacity: 0;
    animation: FadeIn 1s 2.7s forwards ease;
  }

  @keyframes FadeIn {
    0% {
      transform: translateY(-20px) rotateX(25deg);
      opacity: 0;
    }

    100% {
      top: 0;
      transform: translateY(0px) rotateX(0);
      opacity: 1;
    }
  }
`;

// const NumberText = styled.span`
//   color: var(--green-num);
//   font-size: 1.2rem;

//   @media (min-width: 370px) {
//     font-size: 1.4rem;
//   }

//   @media (min-width: 640px) {
//     font-size: 1.6rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 2rem;
//   }
// `;

// const SubText = styled.span`
//   font-size: 0.7rem;

//   @media (min-width: 1024px) {
//     font-size: 0.9rem;
//   }
// `;

// const HighlightText = styled.span`
//   color: var(--green-num);
//   font-size: 1rem;

//   @media (min-width: 370px) {
//     font-size: 1.1rem;
//   }

//   @media (min-width: 640px) {
//     font-size: 1.2rem;
//   }
// `;

const DataImgStyle = styled.div`
  width: 10rem;
  position: absolute;
  right: 0;
  top: -7.5rem;
  z-index: -1;
  opacity: 0.7;
  animation: DadaImgFadeIn 1s 2.2s backwards;

  &:after {
    content: "";
    display: block;
    width: 12rem;
    height: 6rem;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 1rem 0 0 1rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -2;
  }

  @keyframes DadaImgFadeIn {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 0.7;
    }
  }

  @media (min-width: 640px) {
    width: 11rem;
    left: 0rem;
    top: 10rem;

    &:after {
      border-radius: 1rem;
      width: 14rem;
      height: 7rem;
      left: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 14rem;

    &:after {
      width: 18rem;
      height: 9rem;
    }
  }

  @media (min-width: 1280px) {
    width: 16rem;
    opacity: 1;
    animation: DadaImgFadeIn 1s 2.2s backwards;

    &:after {
      width: 20rem;
      height: 10rem;
    }

    @keyframes DadaImgFadeIn {
      0% {
        transform: translateX(-20px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const YodaImgStyle = styled.div`
  width: 10rem;
  position: absolute;
  right: 0rem;
  bottom: 6.2rem;
  z-index: -1;
  opacity: 0.7;
  animation: YodaImgFadeIn 1s 2.2s backwards;

  &:after {
    content: "";
    display: block;
    width: 12rem;
    height: 6rem;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 1rem 0 0 1rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -2;
  }

  @keyframes YodaImgFadeIn {
    0% {
      transform: translateX(20px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 0.7;
    }
  }

  @media (min-width: 640px) {
    width: 11rem;
    right: 0.5rem;
    bottom: -1.5rem;
    &:after {
      border-radius: 1rem;
      width: 14rem;
      height: 7rem;
      right: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 14rem;
    bottom: -3rem;
    &:after {
      width: 18rem;
      height: 9rem;
    }
  }

  @media (min-width: 1280px) {
    width: 16rem;
    bottom: -2rem;
    opacity: 1;
    animation: YodaImgFadeIn 1s 2.2s backwards;
    &:after {
      width: 20rem;
      height: 10rem;
    }

    @keyframes YodaImgFadeIn {
      0% {
        transform: translateX(20px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const currentAmount = 1711;
const totalAmount = 90911;
const updateDate = "2024/02/12";
const targetAmount = 90000;
// const currentState = 3;
const finished = [
  {
    title: "第一",
    name: "基礎募資",
    amount: "36,000",
    amountNum: 36000,
  },
  {
    title: "第二",
    name: "台北站",
    amount: "18,000",
    amountNum: 18000,
  },
  {
    title: "第三",
    name: "台中站",
    amount: "18,000",
    amountNum: 18000,
  },
  {
    title: "第四",
    name: "高雄站",
    amount: "18,000",
    amountNum: 18000,
  },
];
const locked = {
  title: "第四",
  name: "高雄站",
  amount: "18,000",
};
// const deadlineTimestamp = new Date(2024, 1, 14, 0, 0, 0).getTime(); // 2024/02/14 00:00:00
const isFinished = totalAmount >= targetAmount;

function Content() {
  const [isLoading, setIsLoading] = useState(true);
  let imgLoadedNum = 0;
  // const [remainTimeSeconds, setRemainTimeSeconds] = useState(
  //   (deadlineTimestamp - new Date().getTime()) / 1000
  // );
  // const [remainDays, setRemainDays] = useState("0");
  // const [remainHours, setRemainHours] = useState("0");
  // const [remainMinutes, setRemainMinutes] = useState("0");
  // const [remainSeconds, setRemainSeconds] = useState("0");
  // const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);
  // const [isAccountInfoModalOpen, setIsAccountInfoModalOpen] = useState(false);
  // const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);

  const imageLoad = () => {
    imgLoadedNum++;
    imgLoadedNum === 2 && setIsLoading(false);
  };

  // const toggleIntroModal = () => setIsIntroModalOpen((newValue) => !newValue);
  // const toggleAccountInfoModal = () =>
  //   setIsAccountInfoModalOpen((newValue) => !newValue);
  // const toggleRewardModal = () => setIsRewardModalOpen((newValue) => !newValue);

  // const buttons = [
  //   {
  //     text: "活動簡介",
  //     icon: TipsAndUpdatesRound,
  //     event: toggleIntroModal,
  //   },
  //   {
  //     text: "募資方式",
  //     icon: LiveHelpRound,
  //     event: toggleAccountInfoModal,
  //   },
  //   {
  //     text: "募資回饋",
  //     icon: ShoppingBagFilled,
  //     event: toggleRewardModal,
  //   },
  // ];

  // useEffect(() => {
  //   if (isFinished) {
  //     setRemainDays("0");
  //     setRemainHours("00");
  //     setRemainMinutes("00");
  //     setRemainSeconds("00");
  //     return;
  //   }

  //   const interval = setInterval(() => {
  //     setRemainTimeSeconds((newValue) => newValue - 1);
  //   }, 1000);

  //   const getRemainTime = () => {
  //     const days = Math.trunc(remainTimeSeconds / (60 * 60 * 24));
  //     const hours = (
  //       "0" + Math.trunc((remainTimeSeconds / (60 * 60)) % 24)
  //     ).slice(-2);
  //     const minutes = ("0" + Math.trunc((remainTimeSeconds / 60) % 60)).slice(
  //       -2
  //     );
  //     const seconds = ("0" + Math.trunc(remainTimeSeconds % 60)).slice(-2);
  //     setRemainDays(days);
  //     setRemainHours(hours);
  //     setRemainMinutes(minutes);
  //     setRemainSeconds(seconds);
  //   };

  //   getRemainTime();

  //   return () => clearInterval(interval);
  // }, [remainTimeSeconds]);

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
    <StyledContent>
      <div
        className={
          "flex justify-center my-20 " + " " + (isLoading ? "" : "hidden")
        }
      >
        <Loader />
      </div>
      <div className={isLoading ? "hidden" : "block"}>
        <Container className="flex flex-col items-center relative space-y-4 mt-8 mb-12 mx-auto px-6 w-full max-w-lg sm:max-w-xl sm:space-y-9 md:max-w-3xl lg:max-w-4xl">
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
                {/* {finished.map((item) => (
                  <FinalFinishedProgressBar
                    title={item.title}
                    name={item.name}
                    amountNum={item.amountNum}
                    key={item.title}
                  />
                ))} */}
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
              {finished.map((item) => (
                <FinishedProgressBar
                  title={item.title}
                  name={item.name}
                  amount={item.amount}
                  key={item.title}
                />
              ))}
              <LockedProgressBar
                title={locked.title}
                name={locked.name}
                amount={locked.amount}
              />
            </div>
          )}

          <div className="fade_in_anime w-full pt-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-7">
            <IntroBtnGroup />
            {/* {buttons.map((item) => (
              <Button
                text={item.text}
                icon={item.icon}
                onClick={item.event}
                key={item.text}
              />
            ))} */}
          </div>
        </Container>
        <DataImgStyle>
          <img src={DadaImg} alt="" onLoad={imageLoad} />
        </DataImgStyle>
        <YodaImgStyle>
          <img src={YodaImg} alt="" onLoad={imageLoad} />
        </YodaImgStyle>
      </div>
      {/* <Modal
        isOpen={isIntroModalOpen}
        title="活動簡介"
        closeModal={toggleIntroModal}
        key="introModal"
      >
        我們將計劃2024/3/20-4/20，在台灣多處(雙北、台中、高雄)以募資解鎖方式散播雞腿幫教義，慶祝灰妲出道三周年。
      </Modal>
      <Modal
        isOpen={isAccountInfoModalOpen}
        title="募資方式"
        closeModal={toggleAccountInfoModal}
        key="accountInfoModal"
      >
        <div>匯款至 Line Bank 銀行帳戶</div>
        <div>
          銀行：<strong>824 連線商業銀行</strong>
        </div>
        <div>
          帳號：<strong>111014714985</strong>
        </div>
        <div>時間：即日起至2024/1/31</div>
      </Modal>
      <Modal
        isOpen={isRewardModalOpen}
        title="募資回饋"
        closeModal={toggleRewardModal}
        key="rewardModal"
      >
        <div>
          單次匯款滿五百以上，可憑匯款證明在場次(如FF/CWT...)，向(帆/楠)索取明信片一張，同一帳號匯款累積兩千以上，填寫
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeY2CMaUNRrr90Xc7KqgnQtw58SnMWPg9jzfZYtYt0iEIzQDw/viewform"
            target="_blank"
            className="underline hover:text-amber-300 active:text-amber-500"
            rel="noreferrer"
          >
            回饋表單
          </a>
          贈送搖搖立牌。
        </div>
      </Modal> */}
    </StyledContent>
  );
}

export default Content;
