import styled from "styled-components";
import { CloseRound, SendFilled } from "@ricons/material";

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
  width: auto;
  @media (min-width: 640px) {
    min-width: 18rem;
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
    <header className="flex flex-col justify-between sm:flex-row sm:mt-6">
      <div className="sm:w-full">
        <Line $color="red" $colorCode="#EB7A82" className="mb-1.5 mt-1" />
        <Line $color="orange" $colorCode="#FDC879" />
      </div>
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
      <div className="hidden sm:flex flex-col justify-end items-end pb-2 sm:w-full">
        <Line $color="orange" $colorCode="#FDC879" className="mb-1.5" />
        <Line $color="red" $colorCode="#EB7A82" />
      </div>
    </header>
  );
}

export default Header;
