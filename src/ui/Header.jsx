import styled from "styled-components";
import { CloseRound, SendFilled } from "@ricons/material";

const Container = styled.div``;
// const LineGroup = styled.div``;
const Line = styled.div`
  height: 6px;
  width: 100vw;
  background-color: ${(props) => props.color};

  @media (min-width: 640px) {
    height: 10px;
    width: ${(props) => (props.color === "red" ? "20vw" : "18vw")};
  }
`;
const TitleText = styled.p`
  font-size: 20px;

  @media (min-width: 640px) {
    font-size: 28px;
  }
`;

// const TitleIcon = styled.div`
//   width: 40px;
// `;
// const TitleContainer = styled.div``;

function Header() {
  return (
    <Container className="flex flex-col justify-between sm:flex-row sm:mt-6">
      <div>
        <Line color="red" className="my-1" />
        <Line color="orange" />
      </div>
      <div className="flex flex-col items-center font-bold mt-6 sm:mx-8 sm:mt-0">
        <div className="flex items-center space-x-4">
          <TitleText>
            <span className="font-extrabold text-4xl sm:text-5xl">灰妲</span>
          </TitleText>
          <div className="w-6 sm:w-9">
            <CloseRound />
          </div>
          <TitleText>三周年</TitleText>
        </div>
        {/* <div className="sm:ml-24 mt-4"> */}
        <div className="flex items-center space-x-4 sm:ml-24 mt-4">
          <div className="w-5 sm:w-7">
            <SendFilled />
          </div>
          <TitleText>公車募資計畫</TitleText>
        </div>
        {/* </div> */}
      </div>
      <div className="hidden sm:flex flex-col justify-end items-end pb-2">
        <Line color="orange" className="my-1" />
        <Line color="red" />
      </div>
    </Container>
  );
}

export default Header;
