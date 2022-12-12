import styled from "styled-components";
import OptionButton from "./OptionButton";

export default function PickedScreen({
  selectedOption,
  houseOption,
  gameResult,
}) {
  return (
    <PickedWrapper>
      <PickedOption>
        <OptionButton option={selectedOption} />
        <PickedP>YOU PICKED</PickedP>
      </PickedOption>
      <PickedOption>
        {/* <EmptyCircle /> */}
        <OptionButton option={houseOption} />
        <PickedP>THE HOUSE PICKED</PickedP>
      </PickedOption>
    </PickedWrapper>
  );
}

const PickedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -1rem;
  margin-right: -1rem;
`;

const PickedOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  gap: 30px;
`;

const PickedP = styled.p`
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  font-size: 10px;
`;
