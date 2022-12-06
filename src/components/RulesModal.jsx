import styled from "styled-components";
import CloseIcon from "../assets/img/icon-close.svg";
import { OPTIONS_GRAY } from "../utils";
import OptionButton from "./OptionButton";

export default function RulesModal({ onClose }) {
  return (
    <ModalWrapper>
      <h2>RULES</h2>
      <OptionWrapper>
        {OPTIONS_GRAY.map((option) => (
          <OptionButton key={option.name} option={option} />
        ))}
      </OptionWrapper>
      <button onClick={() => onClose(false)}>
        <img src={CloseIcon} alt="Close Modal" />
      </button>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #fff;
  color: hsl(229, 25%, 31%);
  z-index: 100;
`;

const OptionWrapper = styled.div`
  position: relative;
  width: 100%;
  top: -100px;
`;
