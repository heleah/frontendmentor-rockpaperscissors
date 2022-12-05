import styled from "styled-components";
import { OPTIONS } from "../utils";

export default function GameOptions() {
  return (
    <OptionWrapper>
      {OPTIONS.map((option) => (
        <Option key={option.name} option={option}>
          <img src={option.icon} alt={option.name} />
        </Option>
      ))}
    </OptionWrapper>
  );
}

const OptionWrapper = styled.div`
  position: relative;
  margin: 5rem 1rem;
`;

const Option = styled.button`
  position: absolute;
  top: ${(props) => props.option.top || null};
  right: ${(props) => props.option.right || null};
  left: ${(props) => props.option.left || null};
  display: grid;
  place-items: center;
  height: 100px;
  width: 100px;
  background: #e4e4e4;
  border-radius: 50%;

  &::before,
  &::after {
    position: absolute;
    content: "";
  }

  &::before {
    height: 130px;
    width: 130px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.option.gradient0} 0%,
      ${(props) => props.option.gradient100} 100%
    );
    border-radius: 50%;
    z-index: -10;
  }

  &::after {
    top: ${(props) => props.option.afterTop || null};
    bottom: ${(props) => props.option.afterBottom || null};
    right: ${(props) => props.option.afterRight || null};
    left: ${(props) => props.option.afterLeft || null};
    height: 15px;
    width: 55px;
    background: hsl(237, 49%, 15%);
    transform: ${(props) => props.option.afterTransform || null};
    z-index: -15;
  }
`;
