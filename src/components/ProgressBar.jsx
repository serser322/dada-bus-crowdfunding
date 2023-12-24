import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
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

  &:before {
    content: "";
    display: block;
    position: relative;
    z-index: -1;
    width: ${(props) => props.$percentage + "%"};
    height: 100%;
    background-color: var(--green-bar);
    border-radius: 0.8rem;
    z-index: 0;
  }

  @media (min-width: 640px) {
    height: 2.5rem;
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
  const [percentage, setPercentage] = useState(0);
  const percentageRef = useRef(null);
  percentageRef.current = percentage;
  const amountPercentage = ((currentAmount / targetAmount) * 100).toFixed(1);
  const seconds = 2000 / amountPercentage;
  const increasePercentage = () => {
    const increaseInterval = setInterval(() => {
      if (percentageRef.current < amountPercentage) {
        setPercentage((newValue) => newValue + 1);
      } else {
        clearInterval(increaseInterval);
      }
    }, seconds);
  };

  useEffect(() => {
    increasePercentage();
  }, []);

  return (
    <div className="w-full relative rounded-lg">
      <BusIconImage src={BusIcon} alt="" />
      <div className="flex justify-end items-baseline font-bold mr-4 mb-1.5">
        <span className="text-sm sm:text-base mr-2">NT$</span>
        <NumberText className="text-xl sm:text-2xl">
          <CountUp start={0} end={currentAmount} duration={2.8} delay={0.1} />
        </NumberText>
      </div>
      <Bar className="w-full" $percentage={percentage}></Bar>
      <div className="flex justify-center items-baseline font-bold mt-3 sm:mt-5">
        <span className="text-lg md:text-2xl mr-3">募資進度</span>
        {/* <div>{percentage.toFixed(1)}</div> */}
        <NumberText className="text-3xl md:text-4xl mr-1">
          <CountUp
            start={0}
            end={amountPercentage}
            decimals={1}
            duration={2.8}
            delay={0.1}
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
