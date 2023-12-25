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
import FinishedProgressBar from "../components/FinishedProgressBar";
import LockedProgressBar from "../components/LockedProgressBar";

import {
  AttachMoneyRound,
  AssistantPhotoOutlined,
  AvTimerRound,
  CalendarTodayRound,
  LocationOnOutlined,
  AutoAwesomeOutlined,
} from "@ricons/material";

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
  right: 0rem;
  top: -6rem;
  z-index: -1;
  opacity: 0.7;

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
    &:after {
      width: 20rem;
      height: 10rem;
    }
  }
`;

const YodaImgStyle = styled.div`
  width: 10rem;
  position: absolute;
  right: 0rem;
  bottom: -1rem;
  z-index: -1;
  opacity: 0.7;

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

  @media (min-width: 640px) {
    width: 11rem;
    right: 0.5rem;
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
    &:after {
      width: 20rem;
      height: 10rem;
    }
  }
`;

const targetAmount = 18000;
const currentAmount = 511;
const totalAmount = 36511;
const updateDate = "2023/12/26";
const currentState = 2;
const finishedTitle = "第一";
const finishedAmount = "36,000";
const lockedTitle = "第三";
const lockedAmount = "18,000";
const deadlineTimestamp = 1706716800000; // 2024/02/01 00:00:00

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
    console.log(isLoading);
    imgLoadedNum++;
    imgLoadedNum === 2 && setIsLoading(false);
  };

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
        <div className="flex flex-col items-center relative space-y-10 mt-6 mb-12 mx-auto px-6 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
          <div className="self-start">
            <Title title1="第二階段" title2="臺北站募資" />
            <Divider />
          </div>
          <ProgressBar
            targetAmount={targetAmount}
            currentAmount={currentAmount}
            updateDate={updateDate}
          />
          <div className="self-start !mt-0 invisible ">
            <Divider />
          </div>
          <Card>
            <CardItem icon={AttachMoneyRound} title="目前金額">
              <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                <SubText className="mr-2">NT$</SubText>
                <NumberText>
                  <CountUp
                    start={0}
                    end={currentAmount}
                    duration={2.8}
                    delay={0.1}
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
                      duration={2.8}
                      delay={0.1}
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
                      duration={2.8}
                      delay={0.1}
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
                    duration={0.8}
                    delay={0.3}
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
                    duration={2.8}
                    delay={0.1}
                  />
                </NumberText>
              </div>
            </CardItem>
          </Card>
          <FinishedProgressBar title={finishedTitle} amount={finishedAmount} />
          <LockedProgressBar title={lockedTitle} amount={lockedAmount} />
        </div>
        <DataImgStyle>
          <img src={DadaImg} alt="" onLoad={imageLoad} />
        </DataImgStyle>
        <YodaImgStyle>
          <img src={YodaImg} alt="" onLoad={imageLoad} />
        </YodaImgStyle>
      </div>
    </StyleMain>
  );
}

export default Content;
