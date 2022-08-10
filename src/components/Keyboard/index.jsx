import React, { useRef } from "react";
import "./index.scss";
import click from "../../assets/double_knock.mp3";
export default function index() {
  const input = useRef();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "🔙"];
  function inputNumber(n) {
    return () => {
      const value = input.current.value;
      if (n === "🔙") {
        if (value === "") return;
        input.current.value = value.substring(0, value.length - 1);
        return;
      }
      input.current.value += n;
      clickAudio();
    };
  }
  function clickAudio() {
    const audio = new Audio();
    audio.src = click;
    audio.play();
  }
  return (
    <div className="key-board flex flex-col justify-center items-center">
      <input type="text" readOnly ref={input} />

      <div className="key-board-wrapper">
        {numbers.map((n) => {
          return (
            <div className="key" key={n}>
              <span onClick={inputNumber(n)}>{n}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
