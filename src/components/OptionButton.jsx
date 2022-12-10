import styled from "styled-components";

export default function OptionButton({ option, onClick }) {
  return (
    <>
      <StyledButton option={option} onClick={onClick}>
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
