import React, { useState, useEffect } from "react";
import "./index.scss";
export default function index() {
  const [text, write] = useState([]);
  function autoText() {
    let msg = "BLINKING BLINKING BLINKING BLINKING";
    let arr = msg.split("");
    let i = 1;
    const timer = setInterval(() => {
      write(arr.slice(0, i));
      i++;
      if (i > arr.length) {
        i = 1;
      }
    }, 500);
  }
  useEffect(() => {
    autoText();
  }, ["text"]);
  return (
    <div className="auto-text">
      <div className="text-wrapper">
        <span> {text}</span>
        <b className="blink-line"></b>
      </div>
    </div>
  );
}
