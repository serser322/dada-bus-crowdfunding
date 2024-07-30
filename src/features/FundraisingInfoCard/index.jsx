import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Card from "../../components/Card";
import CardItem from "../../components/CardItem";
import "../../styles/FundraisingCard.scss";
import AttachMoneyRound from "@ricons/material/AttachMoneyRound";
import AutoAwesomeOutlined from "@ricons/material/AutoAwesomeOutlined";
import AssistantPhotoOutlined from "@ricons/material/AssistantPhotoOutlined";
import AvTimerRound from "@ricons/material/AvTimerRound";
import CalendarTodayRound from "@ricons/material/CalendarTodayRound";
import LocationOnOutlined from "@ricons/material/LocationOnOutlined";

function FundraisingInfoCard({ amountData }) {
  const deadlineTimestamp = new Date(2024, 1, 14, 0, 0, 0).getTime(); // 2024/02/14 00:00:00
  const [remainTimeSeconds, setRemainTimeSeconds] = useState(
    (deadlineTimestamp - new Date().getTime()) / 1000
  );

  const [remainTime, setRemainTime] = useState({});

  useEffect(() => {
    if (amountData.isFinished) {
      setRemainTime({
        days: "0",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
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

      setRemainTime({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    getRemainTime();

    return () => clearInterval(interval);
  }, [remainTimeSeconds, amountData]);
  return (
    <>
      {!amountData.isFinished ? (
        <Card>
          <CardItem icon={AttachMoneyRound} title="目前金額">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="sub-text mr-2">NT$</span>
              <span className="number-text">
                <CountUp
                  start={0}
                  end={amountData.currentAmount}
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
                    end={amountData.targetAmount}
                    duration={3}
                    delay={1.2}
                  />
                </span>
              </div>
            </CardItem>
          </div>
          <CardItem icon={AvTimerRound} title="募資倒數">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="number-text mr-2">{remainTime.days}</span>
              <span className="sub-text mr-4">天</span>
              <span className="number-text sm:mr-1">{remainTime.hours}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span className="number-text sm:mr-1">{remainTime.minutes}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span className="number-text">{remainTime.seconds}</span>
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
                    end={amountData.targetAmount}
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
              <span className="sub-text">
                <span className="mr-2">第</span>
              </span>
              <span className="number-text mr-2">
                <CountUp
                  start={0}
                  end={amountData.currentState}
                  duration={3}
                  delay={1.2}
                />
              </span>
              <span className="sub-text mr-1">
                <span className="mr-2">階段</span>
              </span>
              <span>募資中</span>
            </div>
          </CardItem>
          <CardItem icon={AutoAwesomeOutlined} title="當前總額">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="sub-text mr-2">NT$</span>
              <span className="number-text">
                <CountUp
                  start={0}
                  end={amountData.totalAmount}
                  duration={3}
                  delay={1.2}
                />
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
                <CountUp
                  start={0}
                  end={amountData.totalAmount}
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
                    end={amountData.targetAmount}
                    duration={3}
                    delay={1.2}
                  />
                </span>
              </div>
            </CardItem>
          </div>

          <CardItem icon={AvTimerRound} title="募資倒數">
            <div className="flex items-baseline sm:pb-0.5 lg:pb-1">
              <span className="number-text mr-2">{remainTime.days}</span>
              <span className="sub-text mr-4">天</span>
              <span className="number-text sm:mr-1">{remainTime.hours}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span className="number-text sm:mr-1">{remainTime.minutes}</span>
              <span className="sub-text sm:mr-1">
                <span className="text-base">：</span>
              </span>
              <span className="number-text">{remainTime.seconds}</span>
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
                    end={amountData.targetAmount}
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
