import styled from "styled-components";
import { useState, useEffect } from "react";
import DadaImg from "../../public/vts-2022-11-02_06h44_01.png";
import YodaImg from "../../public/vts-2021-12-25_22h52_13.png";
import CountUp from "react-countup";
import Title from "../components/Title";
import Divider from "../components/Divider";
import ProgressBar from "../components/ProgressBar";
import Card from "../components/Card";
import CardItem from "../components/CardItem";
import LockedProgressBar from "../components/LockedProgressBar";

import {
  AttachMoneyRound,
  CheckRound,
  AvTimerRound,
  CalendarTodayRound,
  LocationOnOutlined,
} from "@ricons/material";

const StyleMain = styled.main`
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 1200px;
  }

  @media (min-width: 1350px) {
    max-width: 1300px;
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
  opacity: 0.5;

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

  @media (min-width: 1350px) {
    width: 16rem;

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
  opacity: 0.5;

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

  @media (min-width: 1350px) {
    width: 16rem;
    bottom: -2rem;
    &:after {
      width: 20rem;
      height: 10rem;
    }
  }
`;

function Content() {
  const targetAmount = 36000;
  const currentAmount = 23011;
  const updateDate = "2023/12/25";
  const deadlineTimestamp = 1706716799000; // 2024/01/31 23:59:59
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

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTimeSeconds((newValue) => newValue - 1);
    }, 1000);
    getRemainTime();
    return () => clearInterval(interval);
  }, [remainTimeSeconds]);

  return (
    <StyleMain>
      <div className="flex flex-col items-center relative space-y-10 mt-6 mb-12 mx-auto px-6 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <div className="self-start">
          <Title title1="第二階段" title2="基礎募資" />
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
            <CardItem icon={CheckRound} title="目標金額">
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
              icon={CheckRound}
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
                <CountUp start={0} end={1} duration={0.8} delay={0.3} />
              </NumberText>
              <SubText className="mr-1">
                <span className="mr-2">
                  <span className="text-base">st</span> 階段
                </span>
              </SubText>
              <span>募資中</span>
            </div>
          </CardItem>
        </Card>
        <LockedProgressBar />
      </div>
      <DataImgStyle>
        <img src={DadaImg} alt="" />
      </DataImgStyle>
      <YodaImgStyle>
        <img src={YodaImg} alt="" />
      </YodaImgStyle>
    </StyleMain>
  );
}

export default Content;
