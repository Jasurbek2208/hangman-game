import { MouseEventHandler, useEffect, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'

// Components
import Fireworks from './Fireworks'

// Interface
interface IModal {
  word: String
  errorCount: number
  resetGame: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Modal({ errorCount, word, resetGame }: IModal) {
  const [time, setTime] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setTime(true)
    }, 1500)
  }, [])

  return (
    <StyledModal className={'modal__wrapper' + (time ? ' time' : '')}>
      {errorCount < 6 && word ? <Fireworks /> : null}

      {time && (
        <div className='modal'>
          <div className='top'>
            <h1>You {errorCount > 5 ? 'Lose' : 'Win'}</h1>
          </div>
          <div className='body'>
            <h2>{word}</h2>
            <button type='button' onClick={resetGame}>
              Reset
            </button>
          </div>
        </div>
      )}
    </StyledModal>
  )
}

const StyledModal: StyledComponent<"div", any, {}, never> = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: transparent;

  &.time {
    background-color: #00000052;
  }

  .modal {
    margin-top: -60px;
    padding: 10px 22px;
    width: 350px;
    height: 220px;
    border-radius: 12px;
    background-color: #fff;
    z-index: 10;

    .top {
      padding: 8px 0px;
      border-bottom: 3px solid black;

      h1 {
        text-align: center;
      }
    }

    .body {
      position: relative;
      display: grid;
      place-items: center;

      h2 {
        position: absolute;
        top: 25px;
        color: #4d4d9c;
      }

      button {
        cursor: pointer;
        margin-top: 80px;
        padding: 12px 50px;

        color: #fff;
        font-size: 20px;
        font-weight: 500;

        border: none;
        border-radius: 6px;
        background-color: #333;

        &:focus,
        &:hover {
          outline: none;
          box-shadow: 0px 0px 0px 3px #fff, 0px 0px 0px 5px #333;
        }
      }
    }
  }
`