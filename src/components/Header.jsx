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

  @media only screen and (min-width: 769px) {
    height: 150px;
  }
`;

const StyledLogo = styled.img`
  height: 50px;

  @media only screen and (min-width: 769px) {
    height: 100px;
  }
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

  @media only screen and (min-width: 769px) {
    height: 115px;
    width: 150px;
    padding: 1rem 0;
  }
`;

const ScoreText = styled.p`
  font-size: 10px;
  color: hsl(229, 64%, 46%);
  letter-spacing: 1px;

  @media only screen and (min-width: 769px) {
    font-size: 12px;
  }
`;

const ScoreNo = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: hsl(229, 25%, 31%);
  letter-spacing: -2px;

  @media only screen and (min-width: 769px) {
    font-size: 48px;
  }
`;
