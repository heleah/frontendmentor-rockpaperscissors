import styled from "styled-components";
import Header from "./components/Header";
import GameOptions from "./components/GameOptions";
import RulesButton from "./components/RulesButton";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <GameOptions />
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
