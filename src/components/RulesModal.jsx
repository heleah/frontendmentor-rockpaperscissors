import styled from "styled-components";
import CloseIcon from "../assets/img/icon-close.svg";
import RulesImg from "../assets/img/image-rules.svg";

export default function RulesModal({ onClose }) {
  return (
    <ModalWrapper>
      <h2>RULES</h2>
      <img src={RulesImg} alt="Rules" />
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
