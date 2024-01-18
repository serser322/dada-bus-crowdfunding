import styled from "styled-components";
// import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import BusIcon from "../../public/bus_icon.svg";

const BusIconImage = styled.img`
  filter: invert(67%) sepia(76%) saturate(4030%) hue-rotate(93deg)
    brightness(99%) contrast(108%);
  width: 3.7rem;
  position: absolute;
  top: -7px;
  left: 5px;

  @media (min-width: 640px) {
    width: 4.6rem;
    top: -13px;
    left: 5px;
  }
`;

const NumberText = styled.span`
  color: var(--red-text);
`;

const Bar = styled.div`
  border: 4px solid #34465d;
  position: relative;
  height: 1.7rem;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    position: relative;
    left: ${(props) => props.$percentage - 100 + "%"};
    width: 100%;
    height: 100%;
    background-size: 50% 100%;
    background-image: linear-gradient(
      110deg,
      var(--green-bar) 0 30%,
      #9effc1 45% 55%,
      var(--green-bar) 70% 100%
    );
    border-radius: 0.8rem;
    z-index: -1;
    animation: progressGrow 1s 0.7s backwards ease,
      bgAnimate 1.8s linear infinite;
  }

  @media (min-width: 640px) {
    height: 2.5rem;
  }

  @keyframes progressGrow {
    0% {
      left: -100%;
    }

    100% {
      left: ${(props) => props.$percentage - 100 + "%"};
    }
  }

  @keyframes bgAnimate {
    0% {
      background-position: 0;
    }

    100% {
      background-position: 100%;
    }
  }
`;

const UpdateTime = styled.div`
  font-size: 10px;

  @media (min-width: 640px) {
    font-size: 11px;
    position: absolute;
    bottom: 4px;
    right: 16px;
  }
`;

function ProgressBar({ targetAmount, currentAmount, updateDate }) {
  // const [percentage, setPercentage] = useState(0);
  // const percentageRef = useRef(null);
  // percentageRef.current = percentage;
  const amountPercentage = ((currentAmount / targetAmount) * 100).toFixed(1);
  // const seconds = 2000 / amountPercentage ;
  // const seconds = 100;
  // const increasePercentage = () => {
  //   const increaseInterval = setInterval(() => {
  //     if (percentageRef.current < amountPercentage) {
  //       setPercentage((newValue) => newValue + 1);
  //     } else {
  //       clearInterval(increaseInterval);
  //     }
  //   }, seconds);
  // };

  // useEffect(() => {
  //   // 延遲0.3秒再跑條
  //   setTimeout(() => {
  //     increasePercentage();
  //   }, 300);
  // }, []);

  return (
    <div className="w-full relative rounded-lg">
      <BusIconImage src={BusIcon} alt="" />
      <div className="flex justify-end items-baseline font-bold mr-4 mb-1.5">
        <span className="text-sm sm:text-base mr-2">NT$</span>
        <NumberText className="text-xl sm:text-2xl">
          <CountUp start={0} end={currentAmount} duration={3} delay={0.7} />
        </NumberText>
      </div>
      {/* <Bar className="w-full" $percentage={percentage}></Bar> */}
      <Bar className="w-full" $percentage={amountPercentage}></Bar>
      <div className="flex justify-center items-baseline font-bold mt-3 sm:mt-5">
        <span className="text-lg md:text-2xl mr-3">募資進度</span>
        <NumberText className="text-3xl md:text-4xl mr-1">
          <CountUp
            start={0}
            end={amountPercentage}
            decimals={1}
            duration={3}
            delay={0.7}
          />
        </NumberText>
        <NumberText className="text-lg sm:text-2xl">%</NumberText>
      </div>

      <UpdateTime className="flex justify-center mt-5">
        資料更新：{updateDate}
      </UpdateTime>
    </div>
  );
}

export default ProgressBar;
