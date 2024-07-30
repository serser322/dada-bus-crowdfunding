import styled from "styled-components";
import CountUp from "react-countup";
import BusIcon from "../../../public/bus_icon.svg";
import "../../styles/CurrentProgressBar.scss";

const Bar = styled.div`
  &:before {
    content: "";
    position: relative;
    left: ${(props) => props.$percentage - 100 + "%"};
    animation: progressGrow 2s 1.5s ease, bgAnimate 1.5s linear infinite;
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

function CurrentProgressBar({ targetAmount, currentAmount, updateDate }) {
  const amountPercentage = ((currentAmount / targetAmount) * 100).toFixed(1);
  return (
    <div className="w-full relative rounded-lg">
      <img className="bus-icon" src={BusIcon} alt="" />
      <div className="flex justify-end items-baseline font-bold mr-4 mb-1.5">
        <span className="text-sm sm:text-base mr-2">NT$</span>
        <span className="number-text text-xl sm:text-2xl">
          <CountUp start={0} end={currentAmount} duration={3} delay={0.7} />
        </span>
      </div>
      <Bar className="progress-bar w-full" $percentage={amountPercentage}></Bar>
      <div className="flex justify-center items-baseline font-bold mt-3 sm:mt-5">
        <span className="text-lg md:text-2xl mr-3">募資進度</span>
        <span className="number-text text-3xl md:text-4xl mr-1">
          <CountUp
            start={0}
            end={amountPercentage}
            decimals={1}
            duration={3}
            delay={0.7}
          />
        </span>
        <span className="number-text text-lg sm:text-2xl">%</span>
      </div>

      <div className="update-time flex justify-center mt-5">
        資料更新：{updateDate}
      </div>
    </div>
  );
}

export default CurrentProgressBar;
