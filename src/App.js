import { useState, useEffect } from "react";
import styled from "styled-components";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import RulesButton from "./components/RulesButton";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [houseOption, setHouseOption] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [score, setScore] = useState(loadFromLocal("Score") ?? 0);

  useEffect(() => {
    saveToLocal("Score", score);
  }, [score]);

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
    setTimeout(() => {
      if (result === "YOU WIN") setScore(score + 1);
      if (result === "YOU LOSE" && score > 0) setScore(score - 1);
    }, 2000);
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

  @media only screen and (min-width: 769px) {
    width: 710px;
  }
`;
