import styled from "styled-components";

export default function RulesButton() {
  return <StyledButton>RULES</StyledButton>;
}

const StyledButton = styled.button`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%);
  width: 8rem;
  height: 2.5rem;
  color: #fff;
  letter-spacing: 1px;
  background: transparent;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;
`;
