import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img className="dice-img" src={`${currentDice}dice.png`} alt="1dice" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  .dice {
    cursor: pointer;
  }
  .dice-img {
    width: 60%;
  }
  p {
    margin-right: 200px;
    font-size: 24px;
  }
`;
