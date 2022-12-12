import styled from "styled-components";
import Logo from "../assets/img/logo.svg";

export default function Header({ score }) {
  return (
    <HeaderWrapper>
      <StyledLogo src={Logo} alt="logo" />
      <ScoreBox>
        <ScoreText>SCORE</ScoreText>
        <ScoreNo>{score}</ScoreNo>
      </ScoreBox>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 1rem;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 5px;
`;

const StyledLogo = styled.img`
  height: 50px;
`;

const ScoreBox = styled.div`
  display: grid;
  place-items: center;
  height: 75px;
  width: 75px;
  padding: 0.5rem 0;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
`;

const ScoreText = styled.p`
  font-size: 10px;
  color: hsl(229, 64%, 46%);
  letter-spacing: 1px;
`;

const ScoreNo = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: hsl(229, 25%, 31%);
  letter-spacing: -2px;
`;
