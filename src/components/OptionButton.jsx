import styled from "styled-components";

export default function OptionButton({ option }) {
  return (
    <>
      <StyledButton option={option} className="option-button">
        <img src={option.icon} alt={option.name} />
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  position: absolute;
  top: ${(props) => props.option.top || null};
  right: ${(props) => props.option.right || null};
  left: ${(props) => props.option.left || null};
  display: grid;
  place-items: center;
  height: ${(props) => props.option.dimensions};
  width: ${(props) => props.option.dimensions};
  background: ${(props) => props.option.background};
  border-radius: 50%;

  &::before,
  &::after {
    position: absolute;
    content: "";
  }

  &::before {
    height: ${(props) => props.option.beforeDimensions};
    width: ${(props) => props.option.beforeDimensions};
    background: ${(props) => props.option.beforeBackground};
    border-radius: 50%;
    z-index: -10;
  }

  &::after {
    top: ${(props) => props.option.afterTop || null};
    bottom: ${(props) => props.option.afterBottom || null};
    right: ${(props) => props.option.afterRight || null};
    left: ${(props) => props.option.afterLeft || null};
    height: ${(props) => props.option.afterHeight};
    width: ${(props) => props.option.afterWidth};
    background: ${(props) => props.option.afterBackground};
    transform: ${(props) => props.option.afterTransform || null};
    z-index: -15;
  }

  img {
    width: ${(props) => props.option.isSmall && "40px"};
    fill: ${(props) => props.option.isSmall && "#b0b5c5"};
  }
`;
