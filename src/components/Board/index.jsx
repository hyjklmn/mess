import React, { useState, createRef, useEffect } from "react";
import "./index.scss";
export default function index() {
  let c = [];
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  function increment() {
    for (let i = 0; i < 400; i++) {
      c.push(i);
    }
  }
  function enter(e) {
    const color = randomColor();
    e.target.style.boxShadow = `${color} 0px 0px 2px`;
    e.target.style.background = color;
  }
  function leave(e) {
    e.target.style.background = "";
    e.target.style.transition = ".8s ease";
    e.target.style.boxShadow = `#000 0px 0px 2px`;
  }
  function randomColor(params) {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
  function contextMenu(e) {
    e.preventDefault();
  }
  increment();
  return (
    <div className="board" onContextMenu={contextMenu}>
      <div className="board-box">
        {c.map((i) => {
          return <div key={i} onMouseEnter={enter} onMouseLeave={leave}></div>;
        })}
      </div>
    </div>
  );
}
