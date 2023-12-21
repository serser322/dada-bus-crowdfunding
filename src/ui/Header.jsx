import styled from "styled-components";
import { CloseRound, SendFilled } from "@ricons/material";

const Line = styled.div`
  width: 100%;
  height: ${(props) => (props.color === "red" ? "6px" : "3px")};
  background-color: ${(props) => props.color};

  @media (min-width: 640px) {
    height: ${(props) => (props.color === "red" ? "10px" : "6px")};
    width: ${(props) => (props.color === "red" ? "100%" : "90%")};
  }
`;

const TitleGroup = styled.div`
  width: auto;
  @media (min-width: 640px) {
    min-width: 20rem;
  }
`;

const TitleText = styled.p`
  font-size: 20px;

  @media (min-width: 640px) {
    font-size: 28px;
  }
`;

function Header() {
  return (
    <header className="flex flex-col justify-between sm:flex-row sm:pt-6">
      <div className="sm:w-full">
        <Line color="red" className="mb-1.5 mt-1" />
        <Line color="orange" />
      </div>
      <TitleGroup className="flex flex-col items-center font-bold mt-6 sm:items-start sm:mx-10 sm:mt-0">
        <div className="flex items-center space-x-4">
          <TitleText>
            <span className="font-extrabold text-4xl sm:text-5xl">灰妲</span>
          </TitleText>
          <div className="w-6 sm:w-9">
            <CloseRound />
          </div>
          <TitleText>三周年</TitleText>
        </div>
        <div className="flex items-center space-x-4 sm:ml-24 mt-4">
          <div className="w-5 sm:w-7">
            <SendFilled />
          </div>
          <TitleText>公車募資計畫</TitleText>
        </div>
      </TitleGroup>
      <div className="hidden sm:flex flex-col justify-end items-end pb-2 sm:w-full">
        <Line color="orange" className="mb-1.5" />
        <Line color="red" />
      </div>
    </header>
  );
}

export default Header;
