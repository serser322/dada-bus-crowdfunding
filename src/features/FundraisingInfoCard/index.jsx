import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Card from "../../components/Card";
import CardItem from "../../ui/CardItem";
import "../../styles/FundraisingCard.scss";
import AttachMoneyRound from "@ricons/material/AttachMoneyRound";
import AutoAwesomeOutlined from "@ricons/material/AutoAwesomeOutlined";
import AssistantPhotoOutlined from "@ricons/material/AssistantPhotoOutlined";
import AvTimerRound from "@ricons/material/AvTimerRound";
import CalendarTodayRound from "@ricons/material/CalendarTodayRound";
import LocationOnOutlined from "@ricons/material/LocationOnOutlined";

function FundraisingInfoCard() {
  const currentAmount = 1711;
  const totalAmount = 90911;
  // const updateDate = "2024/02/12";
  const targetAmount = 90000;
  const currentState = 3;

  const deadlineTimestamp = new Date(2024, 1, 14, 0, 0, 0).getTime(); // 2024/02/14 00:00:00
  const isFinished = totalAmount >= targetAmount;
  const [remainTimeSeconds, setRemainTimeSeconds] = useState(
    (deadlineTimestamp - new Date().getTime()) / 1000
  );
  const [remainDays, setRemainDays] = useState("0");
  const [remainHours, setRemainHours] = useState("0");
  const [remainMinutes, setRemainMinutes] = useState("0");
  const [remainSeconds, setRemainSeconds] = useState("0");

  useEffect(() => {
    if (isFinished) {
      setRemainDays("0");
      setRemainHours("00");
      setRemainMinutes("00");
      setRemainSeconds("00");
      return;
    }

    const interval = setInterval(() => {
      setRemainTimeSeconds((newValue) => newValue - 1);
    }, 1000);

    const getRemainTime = () => {
      const days = Math.trunc(remainTimeSeconds / (60 * 60 * 24));
      const hours = (
        "0" + Math.trunc((remainTimeSeconds / (60 * 60)) % 24)
      ).slice(-2);
      const minutes = ("0" + Math.trunc((remainTimeSeconds / 60) % 60)).slice(
        -2
      );
      const seconds = ("0" + Math.trunc(remainTimeSeconds % 60)).slice(-2);
      setRemainDays(days);
      setRemainHours(hours);
      setRemainMinutes(minutes);
      setRemainSeconds(seconds);
    };

    getRemainTime();

    return () => clearInterval(interval);
  }, [remainTimeSeconds, isFinished]);
  return (
    <>
      {!isFinished ? (
        <Card>
          <CardItem icon={AttachMoneyRound} title="目前金額">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="sub-text mr-2">NT$</span>
              <span className="number-text">
                <CountUp
                  start={0}
                  end={currentAmount}
                  duration={3}
                  delay={1.2}
                />
              </span>
            </div>
          </CardItem>

          {/* 螢幕寬度不同，更換目標金額的排列順序 */}
          <div className="md:hidden">
            <CardItem icon={AssistantPhotoOutlined} title="目標金額">
              <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                <span className="sub-text mr-2">NT$</span>
                <span className="number-text">
                  <CountUp
                    start={0}
                    end={targetAmount}
                    duration={3}
                    delay={1.2}
                  />
                </span>
              </div>
            </CardItem>
          </div>
          <CardItem icon={AvTimerRound} title="募資倒數">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="number-text mr-2">{remainDays}</span>
              <span className="sub-text mr-4">天</span>
              <span className="number-text sm:mr-1">{remainHours}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span className="number-text sm:mr-1">{remainMinutes}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span>{remainSeconds}</span>
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
                <span className="sub-text mr-2">NT$</span>
                <span className="number-text">
                  <CountUp
                    start={0}
                    end={targetAmount}
                    duration={3}
                    delay={1.2}
                  />
                </span>
              </div>
            </CardItem>
          </div>
          <CardItem icon={CalendarTodayRound} title="截止時間">
            <span>2024 年 2 月 13 日 23:59</span>
          </CardItem>

          <CardItem icon={LocationOnOutlined} title="階段狀態">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="number-text mr-2">
                <CountUp
                  start={0}
                  end={currentState}
                  duration={3}
                  delay={1.2}
                />
              </span>
              <span className="sub-text mr-1">
                <span className="mr-2">
                  <span className="text-base">nd</span> 階段
                </span>
              </span>
              <span>募資中</span>
            </div>
          </CardItem>
          <CardItem icon={AutoAwesomeOutlined} title="當前總額">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="sub-text mr-2">NT$</span>
              <span className="number-text">
                <CountUp start={0} end={totalAmount} duration={3} delay={1.2} />
              </span>
            </div>
          </CardItem>
        </Card>
      ) : (
        <Card>
          <CardItem icon={AutoAwesomeOutlined} title="當前總額">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="sub-text mr-2">NT$</span>
              <span className="number-text">
                <CountUp start={0} end={totalAmount} duration={3} delay={1.2} />
              </span>
            </div>
          </CardItem>
          {/* 螢幕寬度不同，更換目標金額的排列順序 */}
          <div className="md:hidden">
            <CardItem icon={AssistantPhotoOutlined} title="目標金額">
              <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
                <span className="sub-text mr-2">NT$</span>
                <span className="number-text">
                  <CountUp
                    start={0}
                    end={targetAmount}
                    duration={3}
                    delay={1.2}
                  />
                </span>
              </div>
            </CardItem>
          </div>

          <CardItem icon={AvTimerRound} title="募資倒數">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="number-text mr-2">{remainDays}</span>
              <span className="sub-text mr-4">天</span>
              <span className="number-text sm:mr-1">{remainHours}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span className="number-text sm:mr-1">{remainMinutes}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span className="number-text">{remainSeconds}</span>
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
                <span className="sub-text mr-2">NT$</span>
                <span className="number-text">
                  <CountUp
                    start={0}
                    end={targetAmount}
                    duration={3}
                    delay={1.2}
                  />
                </span>
              </div>
            </CardItem>
          </div>
          <CardItem icon={CalendarTodayRound} title="截止時間">
            <span>2024 年 2 月 13 日 23:59</span>
          </CardItem>

          <CardItem icon={LocationOnOutlined} title="完成目標">
            <div className="flex items-baseline mb-0.5">
              <span className="highlight-text mr-1">
                <span>台北、台中、高雄</span>
              </span>
            </div>
          </CardItem>
          <CardItem icon={AutoAwesomeOutlined} title="階段狀態">
            <div className="flex items-baseline mb-0.5">
              <span className="highlight-text">
                <span>募資結束</span>
                <span className="text-xs ml-2">(金額已達標)</span>
              </span>
            </div>
          </CardItem>
        </Card>
      )}
    </>
  );
}

export default FundraisingInfoCard;
