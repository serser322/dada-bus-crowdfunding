import styled from "styled-components";
import CountUp from "react-countup";
import BusIcon from "../../public/bus_icon.svg";
import CheckCircleRound from "@ricons/material/CheckCircleRound";

const StyledBar = styled.div`
  color: var(--green-3);
`;

const BusIconImage = styled.img`
  filter: invert(41%) sepia(94%) saturate(2000%) hue-rotate(111deg)
    brightness(92%) contrast(105%);
  width: 3.2rem;
  position: absolute;
  top: -12px;
  left: 3px;
`;

const Bar = styled.div`
  border: 2px solid #fafafa;
  position: relative;
  height: 0.6rem;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1.2rem;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: 50% 100%;
    background-image: linear-gradient(
      110deg,
      var(--green-2) 0 30%,
      #0fff43 45% 55%,
      var(--green-2) 70% 100%
    );
    border-radius: 1rem;
    z-index: 0;
    animation: progressGrow 3s 0.7s backwards ease,
      bgAnimate 1.5s linear infinite;
  }

  @media (min-width: 640px) {
    height: 0.9rem;

    .check_icon {
      position: relative;
      top: -18px;
      left: calc(50% - 0.8rem);
      width: 1.6rem;
    }
  }

  @keyframes progressGrow {
    0% {
      left: -100%;
    }

    100% {
      left: 0%;
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

const StyledCheckIcon = styled.div`
  position: relative;
  top: -12px;
  left: calc(50% - 0.6rem);
  width: 1.2rem;

  @media (min-width: 640px) {
    position: relative;
    top: -19px;
    left: calc(50% - 0.8rem);
    width: 1.6rem;
  }
`;

function FinishedProgressBar({ title, name, amountNum }) {
  return (
    <StyledBar className="w-full relative mb-3 rounded-lg">
      <BusIconImage src={BusIcon} alt="" />
      <div className="flex justify-between mt-5 mb-1">
        <div className="text-xs pt-0.5 font-semibold ml-14 sm:ml-16 sm:pt-0 sm:text-sm ">
          <span className="mr-2">{title}階段</span>
          <span className="mr-2">{name}</span>
          <span className="mr-6">
            NT$
            <CountUp start={0} end={amountNum} duration={3} delay={0.7} />
          </span>
        </div>
        <div className="text-sm font-semibold text-end">
          <span className="mr-2">
            <CountUp
              start={0}
              end={100}
              decimals={1}
              duration={3}
              delay={0.7}
            />
            %
          </span>
        </div>
      </div>
      <div>
        <Bar className="w-full text-green-500" />
        <StyledCheckIcon>
          <CheckCircleRound />
        </StyledCheckIcon>
      </div>
    </StyledBar>
  );
}

export default FinishedProgressBar;
