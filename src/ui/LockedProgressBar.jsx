import styled from "styled-components";
import BusIcon from "../../public/bus_icon.svg";
import LockFilled from "@ricons/material/LockFilled";

const StyledBar = styled.div`
  color: var(--gray-1);
`;

const BusIconImage = styled.img`
  filter: invert(41%) sepia(0%) saturate(12%) hue-rotate(145deg) brightness(93%)
    contrast(77%);
  width: 2.5rem;
  position: absolute;
  top: -8px;
  left: 5px;
`;

const Bar = styled.div`
  border: 2px solid var(--gray-1);
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
    background-color: var(--gray-2);
    border-radius: 1rem;
    z-index: 0;
  }

  .lock_icon {
    position: relative;
    top: -13px;
    left: calc(50% - 0.6rem);
    width: 1.2rem;
  }

  @media (min-width: 640px) {
    height: 0.9rem;

    .lock_icon {
      position: relative;
      top: -18px;
      left: calc(50% - 0.8rem);
      width: 1.6rem;
    }
  }
`;

function LockedProgressBar({ title, amount }) {
  return (
    <StyledBar className="w-full relative rounded-lg">
      <BusIconImage src={BusIcon} alt="" />
      <div className="text-xs font-semibold text-end mb-1">
        <span className="mr-2">(待解鎖)</span>
      </div>
      <Bar className="w-full text-gray-500">
        <div className="lock_icon">
          <LockFilled />
        </div>
      </Bar>
      <div className="text-xs font-semibold mt-1.5 ml-3">
        <span className="mr-2">{title}階段募資</span>
        <span className="mr-6">NT${amount}</span>
      </div>
    </StyledBar>
  );
}

export default LockedProgressBar;
