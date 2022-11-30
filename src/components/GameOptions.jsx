import styled from "styled-components";
import RockIcon from "../assets/img/icon-rock.svg";
import PaperIcon from "../assets/img/icon-paper.svg";
import ScissorsIcon from "../assets/img/icon-scissors.svg";

export default function GameOptions() {
  return (
    <OptionWrapper>
      <PaperOption>
        <img src={PaperIcon} alt="Paper" />
      </PaperOption>
      <ScissorsOption>
        <img src={ScissorsIcon} alt="Scissors" />
      </ScissorsOption>
      <RockOption>
        <img src={RockIcon} alt="Rock" />
      </RockOption>
    </OptionWrapper>
  );
}

const OptionWrapper = styled.div`
  position: relative;
  margin: 5rem 1rem;
`;

const Option = styled.button`
  position: absolute;
  display: grid;
  place-items: center;
  height: 100px;
  width: 100px;
  border: none;
  border-radius: 50%;

  &::before,
  &::after {
    position: absolute;
    content: "";
  }

  &::before {
    height: 130px;
    width: 130px;
    background: red;
    border-radius: 50%;
    z-index: -10;
  }

  &::after {
    height: 15px;
    width: 55px;
    background: hsl(237, 49%, 15%);
    z-index: -15;
  }
`;

const PaperOption = styled(Option)`
  &::before {
    background: linear-gradient(
      to bottom,
      hsl(230, 89%, 62%) 0%,
      hsl(230, 89%, 65%) 100%
    );
  }

  &::after {
    right: -65px;
  }
`;

const ScissorsOption = styled(Option)`
  right: 0;

  &::before {
    background: linear-gradient(
      to bottom,
      hsl(39, 89%, 49%) 0%,
      hsl(40, 84%, 53%) 100%
    );
  }

  &::after {
    bottom: -35px;
    right: 65px;
    transform: rotate(-60deg);
  }
`;

const RockOption = styled(Option)`
  top: 150px;
  left: 90px;
  xtransform: translate(-50%);

  &::before {
    background: linear-gradient(
      to bottom,
      hsl(349, 71%, 52%) 0%,
      hsl(349, 70%, 56%) 100%
    );
  }

  &::after {
    top: -35px;
    left: -25px;
    transform: rotate(60deg);
  }
`;
