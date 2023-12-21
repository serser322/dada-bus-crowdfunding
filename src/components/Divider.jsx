import styled from "styled-components";

const DividerLine = styled.div`
  display: block;
  width: 5.4rem;
  height: 1px;
  background-color: #474747;
  margin: 0.5rem 0;

  @media (min-width: 640px) {
    width: 6rem;
    margin: 0.6rem 0;
  }
`;

function Divider() {
  return <DividerLine />;
}

export default Divider;
