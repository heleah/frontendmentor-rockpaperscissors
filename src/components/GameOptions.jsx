import { useState } from "react";
import styled from "styled-components";
import OptionButton from "./OptionButton";
import BlueLine from "./BlueLine";
import { OPTIONS } from "../utils";

export default function GameContainer() {
  const [currentStep, setCurrentStep] = useState("1");
  const [selectedOption, setSelectedOption] = useState();

  function handleOptionSelect(option) {
    setCurrentStep("2");
    setSelectedOption(option);
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
      {currentStep === "2" && (
        <PickedWrapper>
          <PickedOption>
            <OptionButton option={selectedOption} />
            <PickedP>YOU PICKED</PickedP>
          </PickedOption>
          <PickedOption>
            <EmptyCircle />
            <PickedP>THE HOUSE PICKED</PickedP>
          </PickedOption>
        </PickedWrapper>
      )}
    </GameWrapper>
  );
}

const GameWrapper = styled.div`
  position: relative;
  margin: 5rem 1rem;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 75px;
  row-gap: 50px;
`;

const PickedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 295px;
`;

const PickedOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  gap: 30px;
`;

const PickedP = styled.p`
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  font-size: 10px;
`;

const EmptyCircle = styled.p`
  height: 100px;
  width: 100px;
  background: hsl(237, 49%, 15%);
  border-radius: 50%;
`;
