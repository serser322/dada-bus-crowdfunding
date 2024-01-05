import styled from "styled-components";
import BusIcon from "../../public/bus_icon.svg";
import CheckCircleRound from "@ricons/material/CheckCircleRound";

const StyleBar = styled.div`
  color: var(--green-2);
`;

const BusIconImage = styled.img`
  filter: invert(59%) sepia(44%) saturate(5102%) hue-rotate(85deg)
    brightness(118%) contrast(94%);
  width: 2.5rem;
  position: absolute;
  top: -8px;
  left: 5px;
`;

const Bar = styled.div`
  border: 2px solid #fafafa;
  position: relative;
  height: 0.6rem;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1.2rem;

  &::before {
    content: "";
    display: block;
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100%;
    /* background-color: var(--green-1); */
    background-size: 50% 100%;
    background-image: linear-gradient(
      110deg,
      var(--green-1) 0 30%,
      #b5ffc5 45% 55%,
      var(--green-1) 70% 100%
    );
    border-radius: 1rem;
    z-index: 0;
    animation: bgAnimate 1.5s linear infinite;
  }

  .check_icon {
    position: relative;
    top: -12px;
    left: calc(50% - 0.6rem);
    width: 1.2rem;
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

  @keyframes bgAnimate {
    0% {
      background-position: 0;
    }

    100% {
      background-position: 100%;
    }
  }
`;

function FinishedProgressBar({ title, amount }) {
  return (
    <StyleBar className="w-full relative rounded-lg">
      <BusIconImage src={BusIcon} alt="" />
      <div className="text-xs font-semibold text-end mb-1">
        <span className="mr-2">(已解鎖)</span>
      </div>
      <Bar className="w-full text-green-500">
        <div className="check_icon">
          <CheckCircleRound />
        </div>
      </Bar>
      <div className="text-xs font-semibold mt-1.5 ml-3">
        <span className="mr-2">{title}階段募資</span>
        <span className="mr-6">NT${amount}</span>
      </div>
    </StyleBar>
  );
}

export default FinishedProgressBar;
