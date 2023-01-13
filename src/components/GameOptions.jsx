import { useState } from "react";
import styled from "styled-components";
import OptionButton from "./OptionButton";
import BlueLine from "./BlueLine";
import PickedScreen from "./PickedScreen";
import { OPTIONS } from "../utils";

export default function GameContainer({
  selectedOption,
  setSelectedOption,
  houseOption,
  setHouseOption,
  gameResult,
  setGameResult,
}) {
  const [currentStep, setCurrentStep] = useState("1");

  function handleOptionSelect(option) {
    setCurrentStep("2");
    setSelectedOption(option);
    const random = pickRandomOption();
    setHouseOption(random);
  }

  function pickRandomOption() {
    const randomIdx = Math.floor(Math.random() * 3);
    setHouseOption(OPTIONS[randomIdx]);
    return OPTIONS[randomIdx];
  }

  function playAgain() {
    setCurrentStep("1");
    setSelectedOption("");
    setHouseOption("");
    setGameResult("");
  }

  return (
    <GameWrapper>
      {currentStep === "1" && (
        <OptionWrapper>
          {OPTIONS.map((option) => (
            <>
              <OptionButton
                key={option.name}
                option={option}
                onClick={() => handleOptionSelect(option)}
              />
              <BlueLine option={option} />
            </>
          ))}
        </OptionWrapper>
      )}
      {currentStep !== "1" && (
        <PickedScreen
          selectedOption={selectedOption}
          houseOption={houseOption}
          gameResult={gameResult}
        />
      )}
      {currentStep === "2" && (
        <FadingIn>
          <Result>{gameResult}</Result>
          <AgainButton onClick={playAgain}>PLAY AGAIN</AgainButton>
        </FadingIn>
      )}
    </GameWrapper>
  );
}

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 5rem 1rem;

  @media only screen and (min-width: 769px) {
    margin: 5rem 6rem;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 75px;
  row-gap: 50px;

  @media only screen and (min-width: 769px) {
    gap: 125px;
    row-gap: 75px;
  }
`;

const Result = styled.p`
  margin-top: 3rem;
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const AgainButton = styled.button`
  align-self: center;
  width: 10rem;
  height: 2.5rem;
  background: #fff;
  letter-spacing: 1px;
  border-radius: 10px;

  &:hover {
    color: #fff;
    background: transparent;
    border: 2px solid hsl(217, 16%, 45%);
  }
`;

const FadingIn = styled.div`
  text-align: center;
  animation: fadingIn 4s ease-in;

  @keyframes fadingIn {
    0% {
      opacity: 0%;
    }
    30% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
