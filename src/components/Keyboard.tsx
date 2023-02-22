import React, { useState } from "react";
import styled from "styled-components";

interface IKeyboard {
  setLetters: Function;
  letters: String[];
}

export default function Keyboard({ setLetters, letters }: IKeyboard) {
  const uppercaseLetters: Array<String> = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function letterClicked(e: any, letter: String) {
    setLetters((p: Array<String>) => [...p, letter]);
  }

  return (
    <StyledKeyboard>
      {uppercaseLetters.map((i: String, idx: number) => (
        <button
          key={String(i + String(idx))}
          type="button"
          disabled={letters.includes(i)}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            letterClicked(e, i)
          }
        >
          {i}
        </button>
      ))}
    </StyledKeyboard>
  );
}

const StyledKeyboard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  button {
    cursor: pointer;
    width: 50px;
    height: 50px;

    color: #fff;
    font-weight: 600;

    border: none;
    background-color: #333;

    &:focus,
    &:hover {
      outline: none;
    }

    &:disabled {
      cursor: default;
      opacity: 0.7;
      background-color: #5c5c5c;
    }
  }
`;
