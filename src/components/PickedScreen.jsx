import styled from "styled-components";
import OptionButton from "./OptionButton";

export default function PickedScreen({ selectedOption, houseOption }) {
  return (
    <PickedWrapper>
      <PickedOption>
        <OptionButton option={selectedOption} isClickable={false} />
        <PickedP>YOU PICKED</PickedP>
      </PickedOption>
      <PickedOption>
        <FadeIn>
          <OptionButton option={houseOption} isClickable={false} />
        </FadeIn>
        <PickedP>THE HOUSE PICKED</PickedP>
      </PickedOption>
    </PickedWrapper>
  );
}

const PickedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -1rem;
  margin-right: -1rem;
`;

const PickedOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  gap: 30px;

  @media only screen and (min-width: 769px) {
    flex-direction: column-reverse;
    gap: 100px;
    width: 300px;
  }
`;

const PickedP = styled.p`
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  font-size: 10px;

  @media only screen and (min-width: 769px) {
    font-size: 24px;
  }
`;

const FadeIn = styled.div`
  animation: fadeIn 3s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
