import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GameContainer from "./components/GameOptions";
import RulesButton from "./components/RulesButton";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [houseOption, setHouseOption] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    calcResult();
  }, [selectedOption, houseOption]);

  function calcResult() {
    let result;
    switch (selectedOption.name) {
      case "Rock":
        if (houseOption.name === "Rock") result = "YOU DRAW";
        if (houseOption.name === "Paper") result = "YOU LOSE";
        if (houseOption.name === "Scissors") result = "YOU WIN";
        break;
      case "Paper":
        if (houseOption.name === "Rock") result = "YOU WIN";
        if (houseOption.name === "Paper") result = "YOU DRAW";
        if (houseOption.name === "Scissors") result = "YOU LOSE";
        break;
      case "Scissors":
        if (houseOption.name === "Rock") result = "YOU LOSE";
        if (houseOption.name === "Paper") result = "YOU WIN";
        if (houseOption.name === "Scissors") result = "YOU DRAW";
        break;
      default:
        return;
    }
    setGameResult(result);
    if (result === "YOU WIN") setScore(score + 1);
    if (result === "YOU LOSE" && score > 0) setScore(score - 1);
  }

  return (
    <AppWrapper>
      <Header score={score} />
      <GameContainer
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        houseOption={houseOption}
        setHouseOption={setHouseOption}
        gameResult={gameResult}
        setGameResult={setGameResult}
        score={score}
        setScore={setScore}
      />
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
