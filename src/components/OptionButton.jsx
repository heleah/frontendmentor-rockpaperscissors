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
  height: 100px;
  width: 100px;
  background: #e4e4e4;
  border-radius: 50%;

  &::before {
    position: absolute;
    content: "";
    height: 130px;
    width: 130px;
    background: ${(props) => props.option.borderGradient};
    border-radius: 50%;
    z-index: -10;
  }
`;
