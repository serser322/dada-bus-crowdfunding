import styled from "styled-components";
import CloseRound from "@ricons/material/CloseRound";
import SendFilled from "@ricons/material/SendFilled";

const LeftLinesAnime = styled.div`
  animation: pushInFromLeft 1s forwards ease-out;

  @keyframes pushInFromLeft {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;

const RightLinesAnime = styled.div`
  animation: pushInFromRight 1s forwards ease-out;

  @keyframes pushInFromRight {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;

const Line = styled.div`
  width: 100vw;
  height: ${(props) => (props.$color === "red" ? "6px" : "3px")};
  background-color: ${(props) => props.$colorCode};

  @media (min-width: 640px) {
    height: ${(props) => (props.$color === "red" ? "10px" : "6px")};
    width: ${(props) => (props.$color === "red" ? "100%" : "90%")};
  }
`;

const TitleGroup = styled.div`
  animation: bounceIn 1s 0.2s backwards ease;
  @media (min-width: 640px) {
    min-width: 18rem;
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    60% {
      transform: scale(1.1);
    }

    100% {
      opacity: 100%;
      transform: scale(1);
    }
  }
`;

const TitleText = styled.p`
  font-size: 20px;

  @media (min-width: 640px) {
    font-size: 26px;
  }
`;

function Header() {
  return (
    <header className="flex flex-col justify-between overflow-hidden sm:flex-row sm:mt-6">
      <LeftLinesAnime className="sm:w-full">
        <Line $color="red" $colorCode="var(--pink-1)" className="mb-1.5 mt-1" />
        <Line $color="orange" $colorCode="var(--yellow-1)" />
      </LeftLinesAnime>
      <TitleGroup className="flex flex-col items-center font-bold mt-6 sm:items-start sm:mx-10 sm:mt-0">
        <div className="flex items-center space-x-4">
          <TitleText>
            <span className="font-black text-3xl sm:text-4xl">灰妲</span>
          </TitleText>
          <div className="w-6 sm:w-9">
            <CloseRound />
          </div>
          <TitleText>三周年</TitleText>
        </div>
        <div className="flex items-center space-x-4 sm:ml-20 mt-4">
          <div className="w-5 sm:w-7">
            <SendFilled />
          </div>
          <TitleText>公車募資計畫</TitleText>
        </div>
      </TitleGroup>
      <RightLinesAnime className="hidden sm:flex flex-col justify-end items-end pb-2 sm:w-full">
        <Line $color="orange" $colorCode="var(--yellow-1)" className="mb-1.5" />
        <Line $color="red" $colorCode="var(--pink-1)" />
      </RightLinesAnime>
    </header>
  );
}

export default Header;
