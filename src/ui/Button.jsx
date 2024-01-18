import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid white;
  background-color: var(--pink-1);
  border-radius: 15px;
  width: 100%;
  box-shadow: 1px 3px 4px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: var(--pink-2);
  }

  &:active {
    background-color: var(--pink-3);
    box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.25);
  }
`;

function Button({ text, icon: Icon, onClick }) {
  return (
    <StyledButton
      className="flex justify-center items-center text-white text-sm md:text-base p-2"
      onClick={onClick}
    >
      <span className="w-4 mr-3 sm:w-5 pt-px">
        <Icon />
      </span>
      <span className="tracking-[0.2rem]">{text}</span>
    </StyledButton>
  );
}

export default Button;
