import styled from "styled-components";

export default function Fireworks() {
  return (
    <StyledFireworks>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
    </StyledFireworks>
  );
}

const StyledFireworks = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  
  pointer-events: none;
  z-index: 8;

  .firework {
    position: absolute;
    border-radius: 50%;
    animation: fireworks 3s ease-out none;
    opacity: 0;
  }

  .firework:nth-child(1) {
    top: 10%;
    left: 10%;
    width: 20px;
    height: 20px;
    background-color: red;
  }

  .firework:nth-child(2) {
    top: 20%;
    left: 20%;
    width: 15px;
    height: 15px;
    background-color: blue;
  }

  .firework:nth-child(3) {
    top: 30%;
    left: 30%;
    width: 18px;
    height: 18px;
    background-color: green;
  }

  .firework:nth-child(4) {
    top: 40%;
    left: 40%;
    width: 12px;
    height: 12px;
    background-color: yellow;
  }

  .firework:nth-child(5) {
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    background-color: magenta;
  }

  .firework:nth-child(6) {
    top: 60%;
    left: 60%;
    width: 22px;
    height: 22px;
    background-color: cyan;
  }

  .firework:nth-child(7) {
    top: 70%;
    left: 70%;
    width: 24px;
    height: 24px;
    background-color: orange;
  }

  .firework:nth-child(8) {
    top: 80%;
    left: 80%;
    width: 14px;
    height: 14px;
    background-color: pink;
  }

  .firework:nth-child(9) {
    top: 90%;
    left: 90%;
    width: 26px;
    height: 26px;
    background-color: purple;
  }

  .firework:nth-child(10) {
    top: 60%;
    left: 80%;
    width: 30px;
    height: 30px;
    background-color: lime;
  }

  @keyframes fireworks {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;
