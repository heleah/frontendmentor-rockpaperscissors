import styled from "styled-components";

export default function OptionButton({ option, onClick, isClickable }) {
  return (
    <>
      <StyledButton option={option} onClick={onClick} isClickable={isClickable}>
        <img src={option.icon} alt={option.name} />
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  display: grid;
  place-items: center;
  height: 100px;
  width: 100px;
  background: #e4e4e4;
  border-radius: 50%;

  cursor: ${(props) => (props.isClickable === false ? "default" : "pointer")};

  &::before {
    position: absolute;
    content: "";
    height: 130px;
    width: 130px;
    background: ${(props) => props.option.borderGradient};
    border-radius: 50%;
    z-index: -10;
  }

  @media only screen and (min-width: 769px) {
    height: 150px;
    width: 150px;

    &::before {
      height: 200px;
      width: 200px;
    }

    img {
      height: 75px;
    }
  }
`;
