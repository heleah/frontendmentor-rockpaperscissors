import styled from "styled-components";
import Header from "./components/Header";
import GameOptions from "./components/GameOptions";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <GameOptions />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 310px;
  margin: 2rem auto;
`;
