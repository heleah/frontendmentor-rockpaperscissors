import styled from "styled-components";
import Header from "./components/Header";
import GameContainer from "./components/GameOptions";
import RulesButton from "./components/RulesButton";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <GameContainer />
      <RulesButton />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  margin: 2rem auto;
`;
