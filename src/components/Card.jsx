import styled from "styled-components";

const BaseCard = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.6);
`;

function Card({ children }) {
  return (
    <BaseCard className="flex justify-center rounded-lg w-full p-6">
      <div
        className="
        grid grid-cols-1 
        gap-y-5 
        md:grid-cols-2"
      >
        {children}
      </div>
    </BaseCard>
  );
}

export default Card;
