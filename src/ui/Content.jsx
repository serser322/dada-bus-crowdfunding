import styled from "styled-components";
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

function Content() {
  return (
    <main className="flex flex-col items-center space-y-10 mt-6 mb-12 mx-auto px-6 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
      <div className="self-start">
        <Title title1="第一階段" title2="基礎募資" />
        <Divider />
      </div>

      <ProgressBar />
      <div className="self-start !mt-0 ">
        <Divider />
      </div>
      <Card>
        <CardItem icon={AttachMoneyRound} title="目前金額">
          <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
            <SubText className="mr-2">NT$</SubText>
            <NumberText>23,011</NumberText>
          </div>
        </CardItem>

        {/* 螢幕寬度不同，更換目標金額的排列順序 */}
        <div className="md:hidden">
          <CardItem icon={CheckRound} title="目標金額">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <SubText className="mr-2">NT$</SubText>
              <NumberText>36,000</NumberText>
            </div>
          </CardItem>
        </div>

        <CardItem icon={AvTimerRound} title="募資倒數">
          <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
            <NumberText className="mr-2">49</NumberText>
            <SubText className="mr-4">天</SubText>
            <NumberText className="sm:mr-1">13</NumberText>
            <SubText className="sm:mr-1">
              <span className="text-base">：</span>
            </SubText>
            <NumberText className="sm:mr-1">52</NumberText>
            <SubText className="sm:mr-1">
              <span className="text-base">：</span>
            </SubText>
            <NumberText>13</NumberText>
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
              <NumberText>36,000</NumberText>
            </div>
          </CardItem>
        </div>
        <CardItem icon={CalendarTodayRound} title="截止時間">
          <span>2024 年 1 月 31 日 23:59</span>
        </CardItem>

        <CardItem icon={LocationOnOutlined} title="階段狀態">
          <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
            <NumberText className="mr-2">1</NumberText>
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
    </main>
  );
}

export default Content;
