import React, { useState, useRef } from "react";
import "./index.scss";
export default function index() {
  const [numbers, useNumbers] = useState([
    "A",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "J",
    "Q",
    "K",
  ]);
  const icons = ["♠", "♦", "♠", "♥"];
  const colors = ["red", "black"];
  const selectRef = useRef(null);
  function randomNumber() {
    return numbers[parseInt(Math.random() * 13)];
  }
  function randomIcons() {
    return icons[parseInt(Math.random() * 4)];
  }
  function randomColor() {
    return colors[parseInt(Math.random() * 2)];
  }
  function cardClick(e) {
    let first = e.currentTarget.dataset.first;
    if (
      first &&
      (!e.currentTarget.style.top || e.currentTarget.style.top == "0px")
    ) {
      e.currentTarget.style.top = -350 + "px";
      e.currentTarget.dataset.first = false;
    } else {
      e.currentTarget.style.top = 0;
      e.currentTarget.dataset.first = true;
    }
  }
  randomNumber();
  return (
    <div className="poker-page">
      <div>
        {numbers.map((number, index) => {
          let i = randomIcons();
          let c = randomColor();
          let n = randomNumber();
          return (
            <div
              style={{ left: index * 40 + "px" }}
              className="poker-card border-box px-4 py-3"
              key={number}
              data-first={true}
              onClick={cardClick}
            >
              <b style={{ color: c }}> {n}</b>
              <p style={{ color: c }}>{i}</p>
              <div className="center-content" style={{ color: c }}>
                <span className="icon">{i}</span>
                <span className="num">{n}</span>
              </div>
            </div>
          );
        })}
        <div ref={selectRef} className="move-select"></div>
      </div>
    </div>
  );
}
