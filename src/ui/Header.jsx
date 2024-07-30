import styled from "styled-components";
import "./../styles/Header.scss";
import SendFilled from "@ricons/material/SendFilled";

const Line = styled.div`
  width: 100vw;
  height: ${(props) => (props.$color === "red" ? "6px" : "3px")};
  background-color: ${(props) => props.$colorCode};

  @media (min-width: 640px) {
    height: ${(props) => (props.$color === "red" ? "10px" : "6px")};
    width: ${(props) => (props.$color === "red" ? "100%" : "90%")};
  }
`;

function Header() {
  return (
    <header className="flex flex-col justify-between overflow-hidden sm:flex-row sm:mt-6">
      <div className="left-lines-group sm:w-full">
        <Line $color="red" $colorCode="var(--pink-1)" className="mb-1.5 mt-1" />
        <Line $color="orange" $colorCode="var(--yellow-1)" />
      </div>
      <div className="title-group flex flex-col items-center font-bold mt-6 sm:items-start sm:mx-10 sm:mt-0">
        <div className="flex items-center space-x-3">
          <p className="title-text">
            <span className="font-black">灰妲</span>
          </p>
          {/* <div className="w-5 sm:w-7 flex justify-center">
            <CloseRound />
          </div> */}
          <p className="title-text">三周年公車</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:ml-16">
          <div className="w-5 sm:w-6">
            <SendFilled />
          </div>
          <p className="title-text flex items-center">
            <span className="text-xl sm:text-2xl">3/20 - 4/18 上路</span>
          </p>
        </div>
      </div>
      <div className="right-lines-group hidden sm:flex flex-col justify-end items-end pb-2 sm:w-full">
        <Line $color="orange" $colorCode="var(--yellow-1)" className="mb-1.5" />
        <Line $color="red" $colorCode="var(--pink-1)" />
      </div>
    </header>
  );
}

export default Header;
