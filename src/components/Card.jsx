import styled from "styled-components";

const BaseCard = styled.div`
  box-shadow: 0px 0px 4px 2px rgba(255, 0, 0, 0.25);
`;

function Card({ children }) {
  return (
    <BaseCard className="flex justify-center rounded-lg w-full p-6">
      <div
        className="
        grid grid-cols-1 
        gap-y-8 
        md:grid-cols-[minmax(300px,_0.7fr)_minmax(360px,_1.3fr)] 
        lg:grid-cols-2"
      >
        {children}
      </div>
    </BaseCard>
  );
}

export default Card;
