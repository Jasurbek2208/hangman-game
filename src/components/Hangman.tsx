import { useEffect, useState } from "react";
import styled from "styled-components";
import Keyboard from "./Keyboard";
import Modal from "./Modal";

export default function Hangman() {
  const [errorCount, setErrorCount] = useState(0);
  const [letters, setLetters] = useState<Array<String>>([]);

  const word: String = "Airport";
  const wordLetters: Array<String> = word.toUpperCase().split("");

  function resetGame() {
    setErrorCount(0);
    setLetters([]);
  }

  useEffect(() => {
    if (letters.length > 0) {
      if (!wordLetters.includes(letters[letters.length - 1])) {
        setErrorCount((p) => ++p);
      }
    }
  }, [letters]);

  return (
    <StyledHangman>
      <div className="hang">
        <div className="dor">
          <div className="top"></div>
          <div className="center"></div>
          <div className="bottom"></div>
        </div>

        <div className="man">
          {errorCount > 0 && <div className="head"></div>}
          {errorCount > 1 && <div className="body"></div>}
          {errorCount > 2 && <div className="hand left"></div>}
          {errorCount > 3 && <div className="hand right"></div>}
          {errorCount > 4 && <div className="leg left"></div>}
          {errorCount > 5 && <div className="leg right"></div>}
        </div>
      </div>

      <div className="display">
        {wordLetters.map((i: String, idx: number) => (
          <div
            className={
              "letter" + (errorCount > 5 && !letters.includes(i) ? " lose" : "")
            }
            key={String(i + String(idx))}
          >
            <p>
              {errorCount > 5 && !letters.includes(i)
                ? i
                : letters.includes(i)
                ? i.toUpperCase()
                : ""}
            </p>
          </div>
        ))}
      </div>

      {errorCount > 5 && <Modal word={word} errorCount={errorCount} resetGame={resetGame} />}
      <Keyboard setLetters={setLetters} letters={letters} />
    </StyledHangman>
  );
}

const StyledHangman = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .hang {
    position: relative;
    padding: 30px 0px 0px;
    margin: 0 auto;
    width: max-content;
    display: flex;

    .dor {
      .top {
        position: relative;
        width: 200px;
        height: 6px;
        background-color: #4d250e;

        &::after {
          content: "";
          position: absolute;
          top: 0px;
          right: 0px;
          width: 6px;
          height: 55px;
          background-color: #4d250e;
        }
      }

      .center {
        width: 6px;
        height: 340px;
        background-color: #4d250e;
      }

      .bottom {
        width: 170px;
        height: 8px;
        background-color: #4d250e;
        transform: translateX(-50%);
      }
    }

    .man {
      position: absolute;
      right: -23px;
      padding-top: 50px;
      margin-left: -36px;

      .head {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        border: 6px solid black;
        transform: translateX(5px);
        z-index: 10000 !important;
      }

      .body {
        position: relative;
        width: 6px;
        height: 100px;
        background-color: black;
        transform: translateX(32px);
        z-index: -1;

        &::before {
          content: "";
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 26px;
          height: 12px;
          border-radius: 100%;
          background-color: #4d250e;
        }
      }

      .hand {
        position: absolute;
        top: 118px;
        right: 18px;
        width: 88px;
        height: 6px;
        background-color: black;
        transform: rotate(35deg);
      }

      .hand.right {
        right: -56px;
        transform: rotate(-35deg);
      }

      .leg {
        position: absolute;
        top: 198px;
        left: 10px;
        width: 6px;
        height: 80px;
        background-color: black;
        transform: rotate(35deg);
      }

      .leg.right {
        left: 54px;
        transform: rotate(-35deg);
      }
    }
  }

  .display {
    padding: 20px 0px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .letter {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      border-bottom: 4px solid #333;

      p {
        color: #333;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
      }

      &.founded {
        border-bottom: 4px solid green;
      }

      &.lose {
        border-bottom: 4px solid red;

        p {
          color: red;
        }
      }
    }
  }
`;
