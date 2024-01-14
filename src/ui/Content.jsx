import styled from "styled-components";
import { useState, useEffect } from "react";
import DadaImg from "../../public/vts-2022-11-02_06h44_01.png";
import YodaImg from "../../public/vts-2021-12-25_22h52_13.png";
import CountUp from "react-countup";
import Loader from "../components/Loader";
import Title from "../components/Title";
import Divider from "../components/Divider";
import ProgressBar from "../components/ProgressBar";
import Card from "../components/Card";
import CardItem from "../components/CardItem";
import Button from "../components/Button";
import FinishedProgressBar from "../components/FinishedProgressBar";
import LockedProgressBar from "../components/LockedProgressBar";
import Modal from "../components/Modal";

import AttachMoneyRound from "@ricons/material/AttachMoneyRound";
import AssistantPhotoOutlined from "@ricons/material/AssistantPhotoOutlined";
import AvTimerRound from "@ricons/material/AvTimerRound";
import CalendarTodayRound from "@ricons/material/CalendarTodayRound";
import LocationOnOutlined from "@ricons/material/LocationOnOutlined";
import AutoAwesomeOutlined from "@ricons/material/AutoAwesomeOutlined";
import LiveHelpRound from "@ricons/material/LiveHelpRound";
import TipsAndUpdatesRound from "@ricons/material/TipsAndUpdatesRound";
import ShoppingBagFilled from "@ricons/material/ShoppingBagFilled";

const StyleMain = styled.main`
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
  .fade_in_anime:first-child {
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

const NumberText = styled.span`
  color: var(--green-num);
  font-size: 1.2rem;

  @media (min-width: 370px) {
    font-size: 1.4rem;
  }

  @media (min-width: 640px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const SubText = styled.span`
  font-size: 0.7rem;

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const DataImgStyle = styled.div`
  width: 10rem;
  position: absolute;
  right: -1rem;
  top: -6.5rem;
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

const currentAmount = 6711;
const totalAmount = 42711;
const updateDate = "2024/01/15";
const targetAmount = 18000;
const currentState = 2;
const finishedTitle = "第一";
const finishedAmount = "36,000";
const lockedTitle = "第三";
const lockedAmount = "18,000";
const deadlineTimestamp = new Date(2024, 1, 1, 0, 0, 0).getTime(); // 2024/02/01 00:00:00

function Content() {
  const [isLoading, setIsLoading] = useState(true);
  let imgLoadedNum = 0;
  const [remainTimeSeconds, setRemainTimeSeconds] = useState(
    (deadlineTimestamp - new Date().getTime()) / 1000
  );
  const [remainDays, setRemainDays] = useState("0");
  const [remainHours, setRemainHours] = useState("0");
  const [remainMinutes, setRemainMinutes] = useState("0");
  const [remainSeconds, setRemainSeconds] = useState("0");
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);
  const [isAccountInfoModalOpen, setIsAccountInfoModalOpen] = useState(false);
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);

  const getRemainTime = () => {
    const days = Math.trunc(remainTimeSeconds / (60 * 60 * 24));
    const hours = (
      "0" + Math.trunc((remainTimeSeconds / (60 * 60)) % 24)
    ).slice(-2);
    const minutes = ("0" + Math.trunc((remainTimeSeconds / 60) % 60)).slice(-2);
    const seconds = ("0" + Math.trunc(remainTimeSeconds % 60)).slice(-2);
    setRemainDays(days);
    setRemainHours(hours);
    setRemainMinutes(minutes);
    setRemainSeconds(seconds);
  };

  const imageLoad = () => {
    imgLoadedNum++;
    imgLoadedNum === 2 && setIsLoading(false);
  };

  const toggleIntroModal = () => setIsIntroModalOpen((newValue) => !newValue);
  const toggleAccountInfoModal = () =>
    setIsAccountInfoModalOpen((newValue) => !newValue);
  const toggleRewardModal = () => setIsRewardModalOpen((newValue) => !newValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTimeSeconds((newValue) => newValue - 1);
    }, 1000);
    getRemainTime();
    return () => clearInterval(interval);
  }, [remainTimeSeconds]);

  return (
    <StyleMain>
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
            <div className="self-start">
              <Title title1="第二階段" title2="臺北站募資" />
              <Divider />
            </div>
            <ProgressBar
              targetAmount={targetAmount}
              currentAmount={currentAmount}
              updateDate={updateDate}
            />
            {/* <div className="self-end !mt-0 visible ">
            <Divider />
          </div> */}
          </div>
          <div className="fade_in_anime w-full">
            <Card>
              <CardItem icon={AttachMoneyRound} title="目前金額">
                <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                  <SubText className="mr-2">NT$</SubText>
                  <NumberText>
                    <CountUp
                      start={0}
                      end={currentAmount}
                      duration={3}
                      delay={1.2}
                    />
                  </NumberText>
                </div>
              </CardItem>

              {/* 螢幕寬度不同，更換目標金額的排列順序 */}
              <div className="md:hidden">
                <CardItem icon={AssistantPhotoOutlined} title="目標金額">
                  <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                    <SubText className="mr-2">NT$</SubText>
                    <NumberText>
                      <CountUp
                        start={0}
                        end={targetAmount}
                        duration={3}
                        delay={1.2}
                      />
                    </NumberText>
                  </div>
                </CardItem>
              </div>

              <CardItem icon={AvTimerRound} title="募資倒數">
                <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                  <NumberText className="mr-2">{remainDays}</NumberText>
                  <SubText className="mr-4">天</SubText>
                  <NumberText className="sm:mr-1">{remainHours}</NumberText>
                  <SubText className="sm:mr-1">
                    <span className="text-base">：</span>
                  </SubText>
                  <NumberText className="sm:mr-1">{remainMinutes}</NumberText>
                  <SubText className="sm:mr-1">
                    <span className="text-base">：</span>
                  </SubText>
                  <NumberText>{remainSeconds}</NumberText>
                </div>
              </CardItem>
              {/* 螢幕寬度不同，更換目標金額的排列順序 */}
              <div className="hidden md:block">
                <CardItem
                  icon={AssistantPhotoOutlined}
                  title="目標金額"
                  className="hidden md:block"
                >
                  <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                    <SubText className="mr-2">NT$</SubText>
                    <NumberText>
                      <CountUp
                        start={0}
                        end={targetAmount}
                        duration={3}
                        delay={1.2}
                      />
                    </NumberText>
                  </div>
                </CardItem>
              </div>
              <CardItem icon={CalendarTodayRound} title="截止時間">
                <span>2024 年 1 月 31 日 23:59</span>
              </CardItem>

              <CardItem icon={LocationOnOutlined} title="階段狀態">
                <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                  <NumberText className="mr-2">
                    <CountUp
                      start={0}
                      end={currentState}
                      duration={3}
                      delay={1.2}
                    />
                  </NumberText>
                  <SubText className="mr-1">
                    <span className="mr-2">
                      <span className="text-base">nd</span> 階段
                    </span>
                  </SubText>
                  <span>募資中</span>
                </div>
              </CardItem>
              <CardItem icon={AutoAwesomeOutlined} title="當前總額">
                <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                  <SubText className="mr-2">NT$</SubText>
                  <NumberText>
                    <CountUp
                      start={0}
                      end={totalAmount}
                      duration={3}
                      delay={1.2}
                    />
                  </NumberText>
                </div>
              </CardItem>
            </Card>
          </div>
          <div className="fade_in_anime w-full">
            <FinishedProgressBar
              title={finishedTitle}
              amount={finishedAmount}
            />
            <LockedProgressBar title={lockedTitle} amount={lockedAmount} />
          </div>
          <div className="fade_in_anime w-full pt-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-7">
            <Button
              text="活動簡介"
              icon={TipsAndUpdatesRound}
              onClick={toggleIntroModal}
            />
            <Button
              text="募資方式"
              icon={LiveHelpRound}
              onClick={toggleAccountInfoModal}
            />
            <Button
              text="募資回饋"
              icon={ShoppingBagFilled}
              onClick={toggleRewardModal}
            />
          </div>
        </Container>
        <DataImgStyle>
          <img src={DadaImg} alt="" onLoad={imageLoad} />
        </DataImgStyle>
        <YodaImgStyle>
          <img src={YodaImg} alt="" onLoad={imageLoad} />
        </YodaImgStyle>
      </div>
      <Modal
        isOpen={isIntroModalOpen}
        title="活動簡介"
        closeModal={toggleIntroModal}
      >
        我們將計劃2024/3/20-4/20，在台灣多處(雙北、台中、高雄)以募資解鎖方式散播雞腿幫教義，慶祝灰妲出道三周年。
      </Modal>
      <Modal
        isOpen={isAccountInfoModalOpen}
        title="募資方式"
        closeModal={toggleAccountInfoModal}
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
      </Modal>
    </StyleMain>
  );
}

export default Content;
