import styled from "styled-components";
import CloseIcon from "../assets/img/icon-close.svg";
import RulesImg from "../assets/img/image-rules.svg";

export default function RulesModal({ onClose }) {
  return (
    <DesktopWrapper>
      <ModalWrapper>
        <h2>RULES</h2>
        <img src={RulesImg} alt="Rules" />
        <button onClick={() => onClose(false)}>
          <img src={CloseIcon} alt="Close Modal" />
        </button>
      </ModalWrapper>
    </DesktopWrapper>
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

  @media only screen and (min-width: 769px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 400px;
    padding: 1rem 2rem;
    border-radius: 10px;

    h2 {
      align-self: flex-start;
    }

    button {
      position: absolute;
      top: 40px;
      right: 32px;
    }
  }
`;

const DesktopWrapper = styled.div`
  @media only screen and (min-width: 769px) {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
