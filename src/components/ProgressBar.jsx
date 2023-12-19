import styled from "styled-components";
import BusIcon from "../../public/bus_icon.svg";

const BusIconImage = styled.img`
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
  width: 3.7rem;
  position: absolute;
  top: -13px;
  left: 5px;

  @media (min-width: 640px) {
    width: 4.6rem;
    top: -20px;
    left: 5px;
  }
`;

const NumberText = styled.span`
  color: red;
`;

const Bar = styled.div`
  border: 3px solid black;
  position: relative;
  height: 1.7rem;
  box-shadow: 1px 3px 4px 0px rgba(255, 0, 0, 0.25);
  border-radius: 1.2rem;

  &::before {
    content: "";
    display: block;
    position: relative;
    z-index: -1;
    width: ${(props) => props.percentage + "%"};
    height: 100%;
    background-color: green;
    border-radius: 1rem;
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

function ProgressBar() {
  const percentage = 70;
  return (
    <div className="w-full relative rounded-lg">
      <BusIconImage src={BusIcon} alt="" />
      <div className="flex justify-end items-baseline font-bold mr-4">
        <span className="text-sm sm:text-base mr-2">NT$</span>
        <NumberText className="text-xl sm:text-2xl">23,011</NumberText>
      </div>
      <Bar className="w-full" percentage={percentage}></Bar>
      <div className="flex justify-center items-baseline font-bold mt-3 sm:mt-5">
        <span className="text-xl sm:text-2xl mr-3">募資進度</span>
        <NumberText className="text-4xl sm:text-5xl mr-1">63.9</NumberText>
        <NumberText className="text-lg sm:text-xl">%</NumberText>
      </div>

      <UpdateTime className="flex justify-center mt-5">
        資料更新：2023/12/10
      </UpdateTime>
    </div>
  );
}

export default ProgressBar;
