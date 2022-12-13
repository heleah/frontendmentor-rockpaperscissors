import { useState } from "react";
import styled from "styled-components";
import RulesModal from "./RulesModal";

export default function RulesButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setModalIsOpen(true)}>RULES</StyledButton>
      {modalIsOpen && <RulesModal onClose={setModalIsOpen} />}
    </>
  );
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
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;

  &:hover {
    color: inherit;
    background: #fff;
    border: none;
  }
`;
