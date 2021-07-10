import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitleStyle>-- Styled Components --</STitleStyle>
      <SButtonStyle>FIGHT!!!</SButtonStyle>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #a4ff2e;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitleStyle = styled.p`
  margin: 0;
  color: #a83d58;
`;

const SButtonStyle = styled.button`
  background-color: #edabb9;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #a4ff2e;
    color: #fff;
    cursor: pointer;
  }
`;
