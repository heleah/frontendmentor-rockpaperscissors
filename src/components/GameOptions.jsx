import styled from "styled-components";
import OptionButton from "./OptionButton";
import { OPTIONS_COLORED } from "../utils";

export default function GameOptions() {
  return (
    <OptionWrapper>
      {OPTIONS_COLORED.map((option) => (
        <OptionButton key={option.name} option={option} />
      ))}
    </OptionWrapper>
  );
}

const OptionWrapper = styled.div`
  position: relative;
  margin: 5rem 1rem;
`;
