import { useEffect } from 'react'
import styled, { StyledComponent } from 'styled-components'

// Interface
interface IKeyboard {
  letters: string[]
  errorCount: number
  setLetters: Function
}

export default function Keyboard({ setLetters, letters, errorCount }: IKeyboard) {
  const uppercaseLetters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  // Site keyboard clicked
  function letterClicked(letter: string) {
    setLetters((p: Array<string>) => [...p, letter])
  }

  // Keyboard click watcher
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e?.ctrlKey || errorCount > 4) return
      const pressedLetter: string = e?.key?.toUpperCase()

      if (e?.keyCode >= 65 && e?.keyCode <= 90 && !letters?.includes(pressedLetter)) {
        setLetters((p: Array<string>) => [...p, pressedLetter])
      }
    }

    window?.addEventListener('keydown', handleKeyDown)

    return () => {
      window?.removeEventListener('keydown', handleKeyDown)
    }
  }, [letters])

  return (
    <StyledKeyboard>
      {uppercaseLetters?.map((i: string, idx: number) => (
        <button key={String(i + String(idx))} type='button' disabled={letters?.includes(i)} onClick={() => letterClicked(i)}>
          {i}
        </button>
      ))}
    </StyledKeyboard>
  )
}

const StyledKeyboard: StyledComponent<"div", any, {}, never> = styled.div`
  padding-bottom: 20px;
  width: 100%;
  max-width: 550px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
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
`