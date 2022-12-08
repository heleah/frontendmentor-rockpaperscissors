import styled from "styled-components";
import OptionButton from "./OptionButton";
import BlueLine from "./BlueLine";
import { OPTIONS } from "../utils";

export default function GameOptions() {
  return (
    <OptionWrapper>
      {OPTIONS.map((option) => (
        <>
          <OptionButton key={option.name} option={option} />
          <BlueLine option={option} />
        </>
      ))}
    </OptionWrapper>
  );
}

const OptionWrapper = styled.div`
  position: relative;
  margin: 5rem 1rem;
`;
